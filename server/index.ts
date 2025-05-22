import { Server } from "./../node_modules/mongodb/src/sdam/server";
// api pakges
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import { abort } from "./routes/abort";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import xssClean from "xss-clean";
import { homeRoute } from "@/routes/home/home.route";

//middlewares
export const port = process.env.PORT || 3000;
export const app = express();

dotenv.config();
app.use(
    rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100,
        message: "Too many requests, please try again later.",
    })
);
app.use(xssClean());
app.use(cookieParser());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: false }));
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
//@ts-ignore
app.use(cors("*"));
app.use(helmet());

//routes
app.use("/api/v1", homeRoute);
app.use(abort);

//  i will move from node:http createServer to bun http createServer
// import bun server as HttpServer
