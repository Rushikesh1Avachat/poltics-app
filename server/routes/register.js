import express from "express";
import multer from "multer";
const router = express.Router();

const upload = multer(); // no file uploads, just form data

router.post("/register", upload.none(), (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({ message: "All fields are required" });
  }

  console.log("📩 New registration:", req.body);
  
  // Simulate DB save
  res.status(200).json({ message: "Registration successful" });
});

export default router;

