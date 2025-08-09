// controllers/userController.js
import User from "../models/User.js";
import Login from "../models/Login.js";
import Register from "../models/Register.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const { fullName, email, mobileNumber, password, confirmPassword, profileFile, mobileOrEmail } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check existing email or mobile
    const existingRegister = await Register.findOne({ email });
    if (existingRegister) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create Login & Register entries
    const loginDoc = await Login.create({
      mobileOrEmail,
      password: hashedPassword,
    });

    const registerDoc = await Register.create({
      fullName,
      email,
      mobileNumber,
      password: hashedPassword,
      confirmPassword: hashedPassword,
      profileFile,
    });

    // Link to User
    const userDoc = await User.create({
      login: loginDoc._id,
      register: registerDoc._id,
    });

    res.status(201).json({ message: "User created successfully", user: userDoc });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate("login").populate("register");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
