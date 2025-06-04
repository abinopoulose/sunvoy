import { Request } from "express";
import { UserDataInterface } from "./userData.interface";

export interface UserRequest extends Request {
    userData?: UserDataInterface;
}