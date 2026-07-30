import pool from "../config/db.js";

const webhookController = {};

webhookController.userCreated = async (req, res) => {
    try {

        console.log(req.body);

        res.status(200).json({
            success: true
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

export default webhookController;