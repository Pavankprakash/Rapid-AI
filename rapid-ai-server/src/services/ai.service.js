import fs from "fs";
import { extractTextFromPDF } from "../utils/pdf.js";
import ai, { GROQ_MODEL } from "../config/groq.js";
import pool from "../config/db.js";
import usageService from "./usage.service.js";
import FEATURES from "../config/features.js";

const aiService = {};

aiService.generateArticle = async (userId, topic, tone, length, instructions) => {

    // 1. Check quota
    const quota = await usageService.checkQuota(
        userId,
        FEATURES.ARTICLE
    );

    if (!quota.allowed) {
        throw new Error("Monthly article limit reached.");
    }

    // 2. Prompt
    const prompt = `
    You are a professional content writer.

    Write a high-quality article using the following requirements.

    Topic:
    ${topic}
  
    Tone:
    ${tone}

    Length:
    ${length}

    Additional Instructions:
    ${instructions || "None"}

    Requirements:

    - Write in clear English.
    - Use proper headings.
    - Include an introduction.
    - Include informative sections.
    - Finish with a conclusion.
    - Make the content original and engaging.
    `;

    // 3. Groq
    const response = await ai.chat.completions.create({
        model: GROQ_MODEL,
        messages: [
            {
                role: "user",
                content: prompt
            }
        ]
    });

    const article = response.choices[0].message.content;
    // 4. Save history
    await pool.query(
        `
        INSERT INTO ai_generations
        (
            user_id,
            feature_type,
            prompt,
            result,
            status
        )
        VALUES
        ($1,$2,$3,$4,'success')
        `,
        [
            userId,
            FEATURES.ARTICLE,
            topic,
            article
        ]
    );

    // 5. Increment usage
    await usageService.incrementUsage(
        userId,
        FEATURES.ARTICLE
    );

    // 6. Return response
    return {
        success: true,
        article,
        usage: {
            currentUsage: quota.currentUsage + 1,
            limit: quota.limit,
            remaining: Math.max(quota.remaining - 1, 0)
        }
    };
};

aiService.generateTitles = async (userId, topic, tone) => {

    // 1. Check quota
    const quota = await usageService.checkQuota(
        userId,
        FEATURES.TITLE
    );

    if (!quota.allowed) {
        throw new Error("Monthly title generation limit reached.");
    }

    // 2. Prompt
    const prompt = `
    You are an expert copywriter.

    Generate 10 SEO-friendly titles.

    Topic:
    ${topic}

    Tone:
    ${tone || "Professional"}

    Requirements:

    - Numbered list
    - Catchy
    - SEO friendly
    - Maximum 12 words
    - No duplicate ideas
    `;

    // 3. groq
    const response = await ai.chat.completions.create({
        model: GROQ_MODEL,
        messages: [
            {
                role: "user",
                content: prompt
            }
        ]
    });

    const titles = response.choices[0].message.content;
    // 4. Save history
    await pool.query(
        `
        INSERT INTO ai_generations
        (
            user_id,
            feature_type,
            prompt,
            result,
            status
        )
        VALUES
        ($1,$2,$3,$4,'success')
        `,
        [
            userId,
            FEATURES.TITLE,
            prompt,
            titles
        ]
    );

    // 5. Increment usage
    await usageService.incrementUsage(
        userId,
        FEATURES.TITLE
    );

    // 6. Return response
    return {
        success: true,
        titles,
        usage: {
            currentUsage: quota.currentUsage + 1,
            limit: quota.limit,
            remaining: Math.max(quota.remaining - 1, 0)
        }
    };
};

aiService.reviewResume = async (userId, pdfPath) => {
    // Check quota
    const quota = await usageService.checkQuota(
        userId,
        FEATURES.RESUME
    );

    if (!quota.allowed) {
        throw new Error("Monthly resume review limit reached.");
    }
    const resumeText = await extractTextFromPDF(pdfPath);

    // Prompt
    const prompt = `
You are an experienced HR manager.

Review this resume:
${resumeText}

Provide:

1. Overall score out of 100
2. Strengths
3. Weaknesses
4. Missing skills
5. Suggestions for improvement
6. Final recommendation

Formate the response clearly using headings.
`;

    // Groq
    const response = await ai.chat.completions.create({
        model: GROQ_MODEL,
        messages: [
            {
                role: "user",
                content: prompt
            }
        ]
    });
    const review = response.choices[0].message.content;
    
    // Save history
    await pool.query(
        `INSERT INTO ai_generations
        (
            user_id,
            feature_type,
            prompt,
            result,
            status
        )
        VALUES
        ($1,$2,$3,$4,'success')`,
        [
            userId,
            FEATURES.RESUME,
            prompt,
            review
        ]
    );

    // Increment usage
    await usageService.incrementUsage(
        userId,
        FEATURES.RESUME
    );

    return {
        success: true,
        review,
        usage: {
            currentUsage: quota.currentUsage + 1,
            limit: quota.limit,
            remaining: Math.max(quota.remaining - 1, 0)
        }
    };
};

export default aiService;