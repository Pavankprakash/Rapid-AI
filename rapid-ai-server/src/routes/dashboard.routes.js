import express from "express";
import dashboardController from "../controllers/dashboard.controller.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

router.get("/:userId", requireAuth, dashboardController.getDashboard);

router.get("/activity/:userId",requireAuth, dashboardController.getRecentActivity);

export default router;