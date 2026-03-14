import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";
import dotenv from "dotenv";
import { error } from "../utils/response.js";
dotenv.config();

export const protect = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        if (!token) {
            error(res, "You are not authorized", 401, "UNAUTHORIZED");
        }
        const decode = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        const user = await UserModel.findById(decode.id);
        if (!user) {
            error(res, "User not found", 401, "UNAUTHORIZED");
        }
        req.user = user;
        next();
    } catch (errorRes) {
        error(res, "Token is not valid", 401, null);
    }
};
