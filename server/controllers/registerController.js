// controllers/registerController.js
import Register from "../models/Register.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  try {
    const { fullName, email, mobileNumber, password, confirmPassword, profileFile } = req.body;

    // Check if all fields are provided
    if (!fullName || !email || !mobileNumber || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check password match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if user already exists
    const existingUser = await Register.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await Register.create({
      fullName,
      email,
      mobileNumber,
      password: hashedPassword,
      confirmPassword: hashedPassword, // optional to store
      profileFile,
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        mobileNumber: newUser.mobileNumber,
      }
    });

  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};

