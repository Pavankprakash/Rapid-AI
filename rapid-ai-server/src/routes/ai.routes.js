import express from "express";
import aiController from "../controllers/ai.controller.js";
const router = express.Router();
import requireAuth from "../middleware/requireAuth.js";
import upload from "../middleware/upload.js";

// Health check for AI routes
router.get("/", aiController.healthCheck);

router.get("/models", aiController.models);

router.post("/article", requireAuth, aiController.generateArticle);

router.post("/titles", requireAuth, aiController.generateTitles);

router.post(
    "/resume",
    requireAuth,
    upload.single("resume"),
    aiController.reviewResume
);

export default router;