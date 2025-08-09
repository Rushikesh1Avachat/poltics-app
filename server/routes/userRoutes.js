// routes/userRoutes.js
import express from "express";
import { loginUser } from "../controllers/loginController.js";
import { registerUser } from "../controllers/registerController.js";
import { createUser, getAllUsers } from "../controllers/userController.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/user", createUser);
router.get("/users", getAllUsers);

export default router;
