import express from "express";
import { protectRoute } from "../middleWare/protectRoute.js";
import { createPost, deletePost, commentPost, likeUnlikePost, getAllPosts, getLikedPosts, getFollowingPosts,getUserPosts } from "../controllers/postController.js";

const router = express.Router();

router.post("/create-post", protectRoute, createPost);
router.delete("/delete-post/:id", protectRoute, deletePost);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.get("/like/:id", protectRoute, getLikedPosts);
router.post("/comment/:id", protectRoute, commentPost);
router.get("/get-all-posts", protectRoute, getAllPosts);
router.get("/get-following-posts", protectRoute, getFollowingPosts);
router.get("/get-user-posts/:userName", protectRoute, getUserPosts);
export default router;