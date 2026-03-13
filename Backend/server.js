import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db";
dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: process.env.URL_FE,
        credential: true,
        methods: ["POST", "GET", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    }),
);
await connectDB();
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Server is running port: " + PORT);
});
