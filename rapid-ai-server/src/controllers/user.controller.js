import userService from "../services/user.service.js";

const userController = {};

userController.syncUser = async (req, res) => {

    try {

        const user = await userService.getOrCreateUser({
            clerkId: req.clerkUserId,
            email: req.email,
            firstName: req.firstName,
            lastName: req.lastName,
            imageUrl: req.imageUrl
        });

        res.json({
            success: true,
            user
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export default userController;