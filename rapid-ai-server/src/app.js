import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import aiRoutes from "./routes/ai.routes.js";
import userRoutes from "./routes/user.routes.js";
import webhookRoutes from "./routes/webhook.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import historyRoutes from "./routes/history.routes.js";


const app = express();

// Middleware
app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://YOUR-VERCEL-APP.vercel.app",
        ],
        credentials: true,
    })
);
app.use(express.json());
app.use(clerkMiddleware());   // <-- MUST come before protected routes
app.use("/api/users", userRoutes);
app.use("/api/ai", aiRoutes);// Register AI routes
app.use("/api/webhooks", webhookRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/history", historyRoutes);


// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Rapid AI API "
  });
});


export default app;