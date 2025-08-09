// models/User.js
import mongoose from "mongoose";
import Login from "./Login.js";
import Register from "./Register.js";

const { Schema, model, models } = mongoose;

const UserSchema = new Schema(
  {
    login: {
      type: Schema.Types.ObjectId,
      ref: "Login",
    },
    register: {
      type: Schema.Types.ObjectId,
      ref: "Register",
    },
  },
  { timestamps: true }
);

export default models.User || model("User", UserSchema);
