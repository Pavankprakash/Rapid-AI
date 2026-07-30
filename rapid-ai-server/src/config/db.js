import { Pool } from "pg";

const pool = new Pool({
    connectionString: "postgresql://neondb_owner:npg_et7Wvq4AUjfi@ep-holy-scene-ailguaju-pooler.c-4.us-east-1.aws.neon.tech/rapid_ai?sslmode=require&channel_binding=require",
    ssl: {
        rejectUnauthorized: false,
    },
});

export default pool;