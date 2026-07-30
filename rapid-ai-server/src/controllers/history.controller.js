import historyService from "../services/history.service.js";
import userService from "../services/user.service.js";
const historyController = {};

historyController.getUserHistory = async (req, res) =>{
    try{
        const user = await userService.getByClerkId(req.clerkUserId);

        if (!user) {
            return res.status(404).json({
                success:false,
                message:"User not found"
            });
        }

    const history =
        await historyService.getUserHistory(user.id);

        res.json({
            success: true,
            history
        });

    } catch(error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export default historyController;