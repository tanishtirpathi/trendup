import express from "express";
import { registerFunction,loginUser } from "../controllers/auth.controller.js";
const router= express.Router()

router.post('/signup', registerFunction)
router.post('/login', loginUser)

export default router