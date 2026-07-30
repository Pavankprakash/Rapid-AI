//history.service.js will only fetch previous generations from the database.
import pool from "../config/db.js";

const historyService = {};

historyService.getUserHistory = async (userId) => {
    const result = await pool.query(
        `
        SELECT
            id,
            feature_type,
            prompt,
            result,
            status,
            created_at
        FROM ai_generations
        WHERE user_id = $1
        ORDER BY created_at DESC
        `,
        [userId]
    );

    return result.rows;
};

export default historyService;