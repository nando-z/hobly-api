import { Router } from "express";

export const homeRoute = Router();
homeRoute.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the API",
    });
});
