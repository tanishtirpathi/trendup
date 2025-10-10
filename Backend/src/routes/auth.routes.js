import express from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  registerFunction,
  loginUser,
  logoutUser,
  getme
} from "../controllers/auth.controller.js";

const router = express.Router();

// Auth routes
router.post("/signup", registerFunction);
router.post("/login", loginUser);
router.get("/logout", verifyJWT, logoutUser);
router.get("/me", verifyJWT, getme);

export default router;
