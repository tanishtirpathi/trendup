import express from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  addComment,
  deleteComment,
  getCommentsForPost,
} from "../controllers/comment.controller.js";

const router = express.Router();

// Comment routes
router.post("/:postId", verifyJWT, addComment);           // Add comment to a post
router.get("/:postId", verifyJWT, getCommentsForPost);    // Get all comments for a post
router.delete("/:commentId", verifyJWT, deleteComment);   // Delete a specific comment

export default router;
