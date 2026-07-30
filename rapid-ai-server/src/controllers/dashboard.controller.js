import dashboardService from "../services/dashboard.service.js";
import userService from "../services/user.service.js";

const dashboardController = {};

dashboardController.getDashboard = async (req, res) => {

    try {

        const user = await userService.getByClerkId(req.clerkUserId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const stats =
            await dashboardService.getDashboardStats(user.id);
        res.json({
            success: true,
            stats
        });
    } catch (error) {

        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

dashboardController.getRecentActivity = async (req, res) => {
    try {
        const user = await userService.getByClerkId(req.clerkUserId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        const activity =
            await dashboardService.getRecentActivity(user.id);
        res.json({
            success: true,
            activity
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
export default dashboardController;