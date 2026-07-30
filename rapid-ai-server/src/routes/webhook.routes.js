import express from "express";
import webhookController from "../controllers/webhook.controller.js";

const router = express.Router();

router.post(
    "/clerk",
    webhookController.userCreated
);

export default router;