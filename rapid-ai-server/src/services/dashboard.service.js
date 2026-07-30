import pool from "../config/db.js";
import usageLimits from "../config/usageLimits.js";

const dashboardService = {};

dashboardService.getRecentActivity = async (userId) => {

    const result = await pool.query(
        `
        SELECT
            id,
            feature_type,
            prompt,
            created_at
        FROM ai_generations
        WHERE user_id = $1
        ORDER BY created_at DESC
        LIMIT 5
        `,
        [userId]
    );

    return result.rows;
};
dashboardService.getDashboardStats = async (userId) => {

    const result = await pool.query(
        `
        SELECT feature_type
        FROM ai_generations
        WHERE user_id = $1
        `,
        [userId]
    );

    const stats = {
        articles: {
            used: 0,
            limit: usageLimits.free.article_generation
        },
        titles: {
            used: 0,
            limit: usageLimits.free.title_generation
        },
        resume: {
            used: 0,
            limit: usageLimits.free.resume_review
        }
    };

    result.rows.forEach((row) => {

        if (row.feature_type === "article_generation")
            stats.articles.used++;

        if (row.feature_type === "title_generation")
            stats.titles.used++;

        if (row.feature_type === "resume_review")
            stats.resume.used++;
    });

    return stats;
};
export default dashboardService;