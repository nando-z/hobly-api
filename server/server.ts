import { createServer } from "http";
import { app, port } from "@/index";
import mongoose from "mongoose";

const MONGODB_URI = process.env.DATABASE_URL || "";
// connection to mongodb
mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });
createServer(app).listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Handle Rejections Promises
const triggerUnhandledRejection = async () => {
    try {
        throw new Error("Unhandled Rejection");
    } catch (error) {
        console.error("Unhandled Rejection:", error);
    }
};

process.on("unhandledRejection", (error: any): unknown => {
    triggerUnhandledRejection();
    process.exit(1);
});
