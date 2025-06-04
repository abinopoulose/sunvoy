const jwt = require('jsonwebtoken');
import { Response, NextFunction } from "express";
import { UserRequest } from "../interfaces/request.interface";
require('dotenv').config();

export const authMiddleware = (req: UserRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Access token is required'
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userData = decoded.userData;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Invalid token'
        });
    }
};

