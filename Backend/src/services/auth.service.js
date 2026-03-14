import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UserModel from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";

export const refershTokenService = async (refreshTokenFromCookie) => {
    if (!refreshTokenFromCookie) {
        throw new Error("Refresh Token does not exist!");
    }
    let decode;
    try {
        decode = jwt.verify(refreshTokenFromCookie, process.env.JWT_REFRESH_SECRET);
    } catch (error) {
        throw new Error("Invalid token");
    }
    const user = await UserModel.findById(decode.id).select("+refreshToken");
    if (!user || user.refreshToken !== refreshTokenFromCookie) {
        throw new Error("Invalid token");
    }
    const { accessToken } = generateToken(user._id);
    return accessToken;
};

export const logoutService = async (userId) => {
    await UserModel.findByIdAndUpdate(userId, { refreshToken: null });
};
