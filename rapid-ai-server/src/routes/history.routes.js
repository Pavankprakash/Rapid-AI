import express from "express";
import historyController from "../controllers/history.controller.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

router.get("/:userId", requireAuth, historyController.getUserHistory);

export default router;