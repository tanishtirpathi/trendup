import express from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  createPost,
  getAllPost,
  deletePost,
} from "../controllers/post.controller.js";

const router = express.Router();

// Post routes
router.post("/", verifyJWT, createPost);           // Create a post
router.get("/", verifyJWT, getAllPost);            // Get all posts
router.delete("/:id", verifyJWT, deletePost);      // Delete a specific post

export default router;
