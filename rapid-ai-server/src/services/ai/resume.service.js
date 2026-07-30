import ai, { GROQ_MODEL } from "../config/groq.js";
import FEATURES from "../../config/features.js";
import usageService from "../usage.service.js";
import pool from "../../config/db.js";

const resumeService = {};

resumeService.reviewResume = async (userId, resumepdf) => {

    const quota = await usageService.checkQuota(
        userId,
        FEATURES.TITLE
    );

    if (!quota.allowed) {
        throw new Error("Monthly title limit reached.");
    }

    const prompt = `
Review this resume.

Give:

1. Overall Score
2. Strengths
3. Weaknesses
4. Improvements

Resume:

${resumepdf}
`;

    const response = await ai.models.generateContent({
        model: GROQ_MODEL,
        contents: prompt,
    });

    const titles = response.text;

    await pool.query(
        `INSERT INTO ai_generations
        (user_id, feature_type, prompt, result)
        VALUES ($1,$2,$3,$4)`,
        [
            userId,
            FEATURES.TITLE,
            topic,
            titles
        ]
    );

    await usageService.incrementUsage(
        userId,
        FEATURES.TITLE
    );

    return {
        success: true,
        titles
    };
};

export default resumeService;