import { verifyJWT } from "../middlewares/auth.middleware.js";
import express from "express";
import { Router } from "express";

import {
  registerFunction,
  loginUser,
  logoutUser,
} from "../controllers/auth.controller.js";
const router = express.Router();


router.route("/logout").get(verifyJWT,logoutUser);
router.route("/login").post(loginUser);
router.route("/signup").post(registerFunction);
export default router;
