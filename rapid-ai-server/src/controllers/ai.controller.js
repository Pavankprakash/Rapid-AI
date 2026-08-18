import aiService from "../services/ai.service.js";
import ai, { GROQ_MODEL } from "../config/groq.js";
import historyService from "../services/history.service.js";
import userService from "../services/user.service.js";



const aiController = {};
aiController.healthCheck = async (req, res) => {
    res.status(200).json({
        success: true,
        message: "AI routes are working."
    });
};

aiController.generateArticle = async (req, res) => {

    try {
        const { topic, tone, length, instructions } = req.body;
        const user = await userService.getByClerkId(req.clerkUserId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        const result = await aiService.generateArticle(
            user.id,
            topic,
            tone,
            length,
            instructions
        );

        res.status(200).json(result);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
aiController.models = async (req, res) => {
    try {
        const models = await ai.models.list();

        res.json(models);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
aiController.getUserHistory = async (req, res) => {
    try {
        const { userId } = req.params;
        const history = await historyService.getUserHistory(user.id);
        res.json({
            success: true,
            history
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
aiController.generateTitles = async (req, res) => {

    try {
        const { topic, tone } = req.body;
        if (!topic) {
            return res.status(400).json({
                success: false,
                message: "Topic is required."
            });
        }

        const user = await userService.getByClerkId(req.clerkUserId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const result = await aiService.generateTitles(
            user.id,
            topic,
            tone
        );

        res.json(result);

    } catch (error) {

        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
aiController.reviewResume = async (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Resume PDF is required."
            });
        }
        const user = await userService.getByClerkId(req.clerkUserId);
        const result = await aiService.reviewResume(
            user.id,
            req.file.path
        );
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

export default aiController;