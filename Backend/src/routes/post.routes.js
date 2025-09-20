import { verifyJWT } from "../middlewares/auth.middleware.js";
import express from "express";
import { Router } from "express";
import {
  createPost,
  getAllPost,
  deletePost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.route("/createpost").post(verifyJWT, createPost);
router.route("/allpost").get(verifyJWT, getAllPost);
router.route("/delete/:id").delete(verifyJWT, deletePost);
export default router;
