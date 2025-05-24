import { UserController } from "@/controller/UserController";
import { Router } from "express";

export const UserRoute = Router();
const userController = new UserController();
UserRoute.route("/")
    .get(userController.index.bind(userController))
    .post(userController.create.bind(userController));
