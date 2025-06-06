import express from "express";
import { protectRoute } from "../middleWare/protectRoute.js";
import { getUserProfile, followUnfollowUser, getSuggestedUsers, updateUserProfile } from "../controllers/userController.js";
const router = express.Router();

router.get("/profile/:userName", protectRoute, getUserProfile);
router.get("/suggestedUsers", protectRoute, getSuggestedUsers);
router.get("/follow/:id", protectRoute, followUnfollowUser);
router.post("/updateUser", protectRoute, updateUserProfile);

export default router;
