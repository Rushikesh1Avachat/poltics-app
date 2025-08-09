// models/Register.js
import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const RegisterSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    mobileNumber: {
      type: String,
      required: true,
      match: [/^\d{10}$/, "Mobile number must be 10 digits"],
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
    },
    profileFile: {
      type: String, // store file path or URL
    },
  },
  { timestamps: true }
);

export default models.Register || model("Register", RegisterSchema);
