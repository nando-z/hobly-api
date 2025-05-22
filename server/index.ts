/**
 * NOTE: This is a development version of the server.
 * It is configured to be less strict and more permissive
 * to facilitate development and testing.
 * for production, use the production version of the server.
 */

import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import express, { Errback, NextFunction, Request, Response } from "express";
import morgan from "morgan";
import { abort } from "./routes/abort";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import { homeRoute } from "@/routes/home/home.route";
import xss from "xss-clean";
import ExpressMongoSanitize from "express-mongo-sanitize";

// Load environment variables
dotenv.config();
if (!process.env.PORT) {
    throw new Error("PORT is not defined in the environment variables");
}

export const port = process.env.PORT || 3000;
export const app = express();

// Security middlewares
app.use(ExpressMongoSanitize());
app.use(cookieParser());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev")); // Use "dev" for development logging

// Configure CORS for development
const corsOptions = {
    origin: process.env.CORS_ORIGIN || "http://localhost:3000", // Allow localhost for development
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
};
app.use(cors(corsOptions));

// Prevent XSS attacks
app.use(xss());

// Rate limiting (less strict for development)
app.use(
    rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 1000, // Higher limit for development
        message: "Too many requests, please try again later.",
        standardHeaders: true,
        legacyHeaders: false,
    })
);

// Helmet for security headers (relaxed for development)
app.use(
    helmet({
        contentSecurityPolicy: false, // Disable CSP for development
    })
);

// Routes
app.use("/api/v1", homeRoute);
app.use(abort);

// Centralized error handling
app.use((err: Errback, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
});
