import { clerkClient } from "@clerk/express";
import userService from "../services/user.service.js";

const userController = {};

userController.syncUser = async (req, res) => {
    try {
        const clerkUser = await clerkClient.users.getUser(
            req.clerkUserId
        );

        const primaryEmailId = clerkUser.primaryEmailAddressId;

        const primaryEmail = clerkUser.emailAddresses?.find(
            (email) => email.id === primaryEmailId
        );

        const email = primaryEmail?.emailAddress;

        console.log("Clerk user ID:", req.clerkUserId);
        console.log("Primary email:", email);

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
        return res.json({
            success: true,
            user
        });
    } catch (error) {
        console.error("Sync user error:", error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export default userController;