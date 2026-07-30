import express from "express";
import requireAuth from "../middleware/requireAuth.js";
import userController from "../controllers/user.controller.js";
import dashboardController from "../controllers/dashboard.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "Users route working"
    });
});

router.get(
    "/me",
    requireAuth,
    userController.syncUser
);

export default router;