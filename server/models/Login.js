// models/Login.js
import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const LoginSchema = new Schema(
  {
    mobileOrEmail: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default models.Login || model("Login", LoginSchema);
