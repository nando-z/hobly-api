import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import express from "express";
import morgan from "morgan";

export const PORT = process.env.PORT;
export const app = express();

dotenv.config();
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: false,
    crossOriginResourcePolicy: false,
    xXssProtection: true,
  }),
);

app.get("/", (_req, res) => {
  res.status(200).json({ message: "Hello" });
});

app.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
    message: "the request resourse not font",
  });
});
