import { Document } from "mongodb";

export interface UserInterface extends Document {
    name: string;
    email: string;
    password: string;
    password_changed_at: Date;
    role: "user" | "admin";
    password_reset_expires: Date;
    password_reset_token: string;
    active: boolean;
    create_at: Date;
    update_at: Date;
    password_confirm: string;
    is_admin: boolean;
    refresh_token: string;
}
