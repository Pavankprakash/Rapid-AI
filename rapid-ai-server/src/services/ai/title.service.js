import ai, { GROQ_MODEL } from "../config/groq.js";
import FEATURES from "../../config/features.js";
import usageService from "../usage.service.js";
import pool from "../../config/db.js";

const titleService = {};

titleService.generateTitles = async (userId, topic) => {

    const quota = await usageService.checkQuota(
        userId,
        FEATURES.TITLE
    );

    if (!quota.allowed) {
        throw new Error("Monthly title limit reached.");
    }

    const prompt = `
Generate 10 creative titles about:

${topic}

Requirements:
- SEO friendly
- Creative
- Short
- Numbered list
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

export default titleService;