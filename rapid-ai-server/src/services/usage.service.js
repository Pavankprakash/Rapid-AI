import pool from "../config/db.js";
import usageLimits from "../config/usageLimits.js";

function getCurrentMonth() {
    const currentMonth = new Date();
    currentMonth.setDate(1);
    currentMonth.setHours(0, 0, 0, 0);
    return currentMonth;
}
const usageService = {};
usageService.getCurrentUsage = async (userId, featureType) => {
    const currentMonth = getCurrentMonth();
    const result = await pool.query(
        `SELECT usage_count
        FROM usage_tracking
        WHERE user_id = $1
        AND feature_type = $2
        AND period_month = $3`,
        [userId, featureType, currentMonth]
    );
    if (result.rows.length === 0) {
        return 0;
    }
    return result.rows[0].usage_count;
};
usageService.checkQuota = async (userId, featureType) => {
    try {
        const currentUsage = await usageService.getCurrentUsage(
            userId,
            featureType
        );
        const user = await pool.query(
            `SELECT plan_type
             FROM users
             WHERE id = $1`,
            [userId]
        );

        if (user.rows.length === 0) {
            throw new Error("User not found");
        }

        const planType = user.rows[0].plan_type;

        const limit = usageLimits[planType][featureType];

        if (limit === undefined) {
            throw new Error("Invalid feature type");
        }

        return {
            allowed: currentUsage < limit,
            currentUsage,
            limit,
            remaining: Math.max(limit - currentUsage, 0)
        };

    } catch (error) {
        console.error("Quota Check Error:", error.message);
        throw error;
    }
};

usageService.incrementUsage = async (userId, featureType) => {

    const currentMonth = getCurrentMonth();

    await pool.query(
        `INSERT INTO usage_tracking (
            user_id,
            feature_type,
            usage_count,
            period_month
        )
        VALUES ($1, $2, 1, $3)

        ON CONFLICT (user_id, feature_type, period_month)
        DO UPDATE
        SET
            usage_count = usage_tracking.usage_count + 1,
            updated_at = NOW()`,
        [userId, featureType, currentMonth]
    );
};


export default usageService;