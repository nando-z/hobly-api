// import dotenv from "dotenv";
// import helmet from "helmet";
// import cors from "cors";
// import express, { Errback, NextFunction, Request, Response } from "express";
// import morgan from "morgan";
// import { abort } from "./routes/abort";
// import cookieParser from "cookie-parser";
// import rateLimit from "express-rate-limit";
// import { homeRoute } from "@/routes/home/home.route";
// import xss from "xss-clean";
// import ExpressMongoSanitize from "express-mongo-sanitize";

// // Load environment variables
// dotenv.config();
// if (!process.env.PORT) {
//     throw new Error("PORT is not defined in the environment variables");
// }
// if (!process.env.CORS_ORIGIN) {
//     throw new Error("CORS_ORIGIN is not defined in the environment variables");
// }

// export const port = process.env.PORT || 3000;
// export const app = express();

// // Security middlewares
// app.use(ExpressMongoSanitize());
// app.use(cookieParser());
// app.use(express.json({ limit: "10kb" }));
// app.use(express.urlencoded({ extended: false }));

// // Use "combined" for detailed logging in production
// app.use(morgan("combined"));

// // Configure CORS for production
// const corsOptions = {
//     origin: process.env.CORS_ORIGIN.split(","), // Allow multiple origins
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
// };
// app.use(cors(corsOptions));

// // Prevent XSS attacks
// app.use(xss());

// // Rate limiting (strict for production)
// app.use(
//     rateLimit({
//         windowMs: 15 * 60 * 1000, // 15 minutes
//         max: 100, // Lower limit for production
//         message: "Too many requests, please try again later.",
//         standardHeaders: true,
//         legacyHeaders: false,
//     })
// );

// // Helmet for strict security headers
// app.use(
//     helmet({
//         contentSecurityPolicy: {
//             directives: {
//                 defaultSrc: ["'self'"],
//                 scriptSrc: ["'self'", "https:"],
//                 styleSrc: ["'self'", "https:", "'unsafe-inline'"],
//                 imgSrc: ["'self'", "data:", "https:"],
//                 connectSrc: ["'self'"],
//                 fontSrc: ["'self'", "https:", "data:"],
//                 objectSrc: ["'none'"],
//                 upgradeInsecureRequests: [],
//             },
//         },
//         crossOriginEmbedderPolicy: true,
//         crossOriginOpenerPolicy: { policy: "same-origin" },
//         crossOriginResourcePolicy: { policy: "same-origin" },
//     })
// );

// // Routes
// app.use("/api/v1", homeRoute);
// app.use(abort);

// // Centralized error handling
// app.use((err: Errback, req: Request, res: Response, next: NextFunction) => {
//     console.error(err);
//     res.status(500).json({ message: "Internal Server Error" });
// });

// // Handle undefined routes
// app.use((req: Request, res: Response) => {
//     res.status(404).json({ message: "Route not found" });
// });
