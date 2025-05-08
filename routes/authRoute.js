import express from "express";
import {
  isAdmin,
  loginController,
  registerController,
  testController,
} from "../controllers/authController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";
const router = express.Router();

//Registration
router.post("/register", registerController);

//Login
router.post("/login", loginController);

//Test route

router.get("/test", isAdmin, requireSignIn, testController);
export default router;
