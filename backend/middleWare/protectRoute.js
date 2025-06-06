import User from "../models/userModels.js";
import jwt from "jsonwebtoken";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "Unauthorized to access" });
    }

    const decodeJWT = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodeJWT) {
      return res.status(401).json({ error: "Invalid token" });
    }

    const user = await User.findById(decodeJWT.userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protect route  middleware", error?.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
