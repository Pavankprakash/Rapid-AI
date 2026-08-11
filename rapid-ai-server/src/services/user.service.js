import pool from "../config/db.js";

const userService = {};

userService.getOrCreateUser = async ({ clerkId, email }) => {

    if(!clerkId) {
        throw new Error("Clerk user Id id required");
    }

    if(!email) {
        throw new Error("User email is required");
    }

    const existingUser = await pool.query(
        `
        SELECT *
        FROM users
        WHERE clerk_id = $1
        `,
        [clerkId]
    );
    if (existingUser.rows.length > 0) {
        return existingUser.rows[0];
    }

    const newUser = await pool.query(
        `
        INSERT INTO users
        (
            clerk_id,
            email,
            plan_type
        )
        VALUES
        (
           $1,
           $2,
          'free'
        )
        RETURNING *
        `,
        [clerkId, email]
    );

    return newUser.rows[0];
};

userService.getByClerkId = async (clerkId) => {
    const result = await pool.query(
        `
        SELECT *
        FROM users
        WHERE clerk_id = $1
        `,
        [clerkId]
    );

    return result.rows[0];
};

export default userService;