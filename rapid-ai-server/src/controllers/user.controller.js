import { clerkClient } from "@clerk/express";
import userService from "../services/user.service.js";

const userController = {};

userController.syncUser = async (req, res) => {
    try {
        const clerkUser = await clerkClient.users.getUser(
            req.clerkUserId
        );

        const email = clerkUser.emailAddresses?.[0]?.emailAddress;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "No email address found for Clerk user"
            });
        }

        const user = await userService.getOrCreateUser({
            clerkId: req.clerkUserId,
            email
        });

        res.json({
            success: true,
            user
        });

    } catch (error) {
        console.error("Sync user error:", error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export default userController;