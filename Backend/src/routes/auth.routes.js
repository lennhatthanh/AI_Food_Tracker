import express from "express";
import { googleLoginController, logout, refresh } from "../controllers/auth.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();
router.post("/google-login", googleLoginController);
router.post("/refresh-token", refresh);
router.post("/logout", protect, logout)
export default router;
