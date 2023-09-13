import User from "../../models/User.js";
import { hashSync } from "bcrypt";

export default async (req, res, next) => {
    try {
        const plainPassword = req.body.password;

        const hashedPassword = hashSync(plainPassword, 10);

        req.body.password = hashedPassword;

        const newUser = await User.create(req.body);

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: newUser,
        });
    } catch (error) {
        return next(error);
    }
};
