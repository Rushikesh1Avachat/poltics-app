import express from "express";
import cors from "cors";

import registerRoutes from "./routes/register.js";
import loginRoutes from "./routes/login.js";
import {connectDB} from "./configs/mongodb.js"
const app = express();
connectDB();
// CORS setup
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/register", registerRoutes);
app.use("/api/login", loginRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





