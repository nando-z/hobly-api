import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import { abort } from "./routes/abort";
import { HomeRoute } from "@/test/HomeRouteTest";
import { createServer } from "node:http";
import cookieParser from "cookie-parser";
export const PORT = process.env.PORT;
export const app = express();
export const server = createServer(app)
dotenv.config() ;
app.use(cookieParser());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors("*"
));
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: false,
    crossOriginResourcePolicy: false,
  }),
);
app.get("/", HomeRoute);
app.use(abort);
