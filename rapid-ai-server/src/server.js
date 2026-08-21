import app from "./app.js";
import pool from "./config/db.js";

const startServer = async () => {
    try {
        await pool.query("SELECT NOW()");

        console.log("PostgreSQL Connected Successfully");

        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("SERVER START ERROR:", error);
        process.exit(1);
    }
};

startServer();