import express from "express";
import { protectRoute } from "../middleWare/protectRoute.js";
import {
  getNotifications,
  deleteNotifications,
  deleteNotification,
} from "../controllers/notificationController.js";

const router = express.Router();

router.get("/getNotifications", protectRoute, getNotifications);
router.delete("/deleteNotifications", protectRoute, deleteNotifications);
router.delete("/deleteNotification", protectRoute, deleteNotification);

export default router;
