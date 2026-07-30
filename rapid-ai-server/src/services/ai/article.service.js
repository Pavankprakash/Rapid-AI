import aiService from "../ai.service.js";
import usageService from "../usage.service.js";
import FEATURES from "../../config/features.js";
import pool from "../../config/db.js";
import userService from "../services/user.service.js";

const articleService = {};

articleService.generateArticle = async (userId, topic) => {

    // 1. Check quota
    const quota = await usageService.checkQuota(
        userId,
        FEATURES.ARTICLE
    );

    if (!quota.allowed) {
        throw new Error("Monthly article limit reached.");
    }

    // 2. Build prompt
    const prompt = `
Write a professional article about:

${topic}

Use headings and bullet points where appropriate.
`;

    // 3. Generate AI response
    const article = await aiService.generateContent(prompt);

    // 4. Save history
    await pool.query(
        `
        INSERT INTO ai_generations
        (
            user_id,
            feature_type,
            prompt,
            result
        )
        VALUES
        ($1,$2,$3,$4)
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

    return {
        article,
        quota: {
            used: quota.currentUsage + 1,
            remaining: Math.max(quota.remaining - 1, 0)
        }
    };

};

export default articleService;