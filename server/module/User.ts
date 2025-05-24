import {  Schema , model } from "mongoose";
import { UserInterface } from "@/types/User";

const UserSchema = new Schema<UserInterface>(
    {
        name: { type: String, required: true },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password_changed_at: { type: Date },
        password_reset_token: { type: String },
        password_reset_expires: { type: Date },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
            required: true,
        },
        active: { type: Boolean, default: true },
        password: { type: String, required: true, select: false },
        create_at: { type: Date, default: Date.now },
        update_at: { type: Date, default: Date.now },
        password_confirm: { type: String, required: true },
        is_admin: { type: Boolean, default: false },
        refresh_token: { type: String },
    },
    { timestamps: true }
);

export const User = model<UserInterface>("User", UserSchema);
