import admin from "../config/firebase.js";
import UserModel from "../models/user.model.js";
import { logoutService, refershTokenService } from "../services/auth.service.js";
import { generateToken } from "../utils/generateToken.js";
import { error, success } from "../utils/response.js";

export const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
};
export const googleLoginController = async (req, res) => {
    try {
        const { token: tokenId } = req.body;
        if (!tokenId) {
            error(res, "Token is required");
        }
        const decodeToken = await admin.auth().verifyIdToken(tokenId);
        const { uid, email, name, picture } = decodeToken;
        let user = await UserModel.findOne({ email });
        if (!user) {
            user = await UserModel.create({
                googleId: uid,
                email,
                name,
                avatar: picture,
            });
        }
        const tokens = generateToken(user._id);
        await UserModel.findOneAndUpdate(user._id, {
            refreshToken: tokens.refreshToken,
        });
        res.cookie("refreshToken", tokens.refreshToken, COOKIE_OPTIONS);
        success(res, "Login in successfull", {
            accessToken: tokens.accessToken,
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
                avatar: user.avatar,
            },
        });
    } catch (errorRes) {
        error(res, errorRes.message);
    }
};
export const refresh = async (req, res) => {
    try {
        const refreshTokenFromCookie = req.cookies.refreshToken;
        const token = refershTokenService(refreshTokenFromCookie);
        success(res, "Successfull obtained new token", token);
    } catch (errorRes) {
        error(res, errorRes.message);
    }
};

export const logout = async (req, res) => {
    try {
        await logoutService(req.user._id);
        res.clearCookies("refreshToken");
        success(res, "Log out successfully");
    } catch (error) {
        error(res, errorRes.message);
    }
};
