import type { Request, Response } from "express";
import { User } from "@/module/User";
export class UserController {
    public async index(request: Request, response: Response): Promise<any> {
        try {
            const users = await User.find();
            return response.status(200).json({
                status: "success",
                data: {
                    users,
                },
            });
        } catch (error) {
            return response.status(500).json({
                status: "error",
                message: "Internal Server Error",
            });
        }
    }
    public async create(request: Request, response: Response): Promise<any> {
        try {
            const { name, email, password } = request.body;
            const user = new User({
                name,
                email,
                password,
            });
            await user.save();
            return response.status(201).json({
                status: "success",
                data: {
                    user,
                },
            });
        } catch (error) {
            return response.status(500).json({
                status: "error",
                message: "Internal Server Error",
            });
        }
    }
}
