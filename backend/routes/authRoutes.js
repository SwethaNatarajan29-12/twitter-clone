import express from "express";
import { login, logout, signup, validateUser } from "../controllers/authController.js";
import { protectRoute } from "../middleWare/protectRoute.js";

const router = express.Router();

router.post("/sign-up", signup);

router.post("/login", login);

router.post("/logout", logout);

router.get("/validateUser", protectRoute, validateUser);

export default router;
