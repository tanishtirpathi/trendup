import express from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  getUserProfile,
  followUser,
  unfollowUser,
  getAllUsers
} from "../controllers/user.controller.js";

const router = express.Router();

// Get all users (for discovery or admin)
router.get("/", verifyJWT, getAllUsers);
// Get and update user profile
router.get("/:id", verifyJWT, getUserProfile);
// Follow / Unfollow users
router.post("/follow/:id", verifyJWT, followUser);
router.post("/unfollow/:id", verifyJWT, unfollowUser);

export default router;
