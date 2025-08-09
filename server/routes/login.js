import express from "express";
import User from "../models/User.js"; // adjust path
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/login", async (req, res) => {
  const {  mobileOrEmail, password } = req.body;
  try {
    const user = await User.findOne({ mobileOrEmail });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

