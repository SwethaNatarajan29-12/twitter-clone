import express from "express";
import { protectRoute } from "../middleWare/protectRoute.js";
import {getNotifications,deleteNotifications} from "../controllers/notificationController.js"

const router = express.Router();

router.get("/getNotifications",protectRoute, getNotifications);
router.delete("/deleteNotifications", protectRoute, deleteNotifications);


export default router;