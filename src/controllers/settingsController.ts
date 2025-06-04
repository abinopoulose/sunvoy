import { Response } from "express";
import { UserRequest } from "../interfaces/request.interface";

export const settingsController = (req: UserRequest, res: Response) => {
    try {
        res.json(req.userData);
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};
