const jwt = require('jsonwebtoken');
import { Request, Response } from "express";
import { UserInterface } from "../interfaces/user.interface";
import { UserDataInterface } from "../interfaces/userData.interface";
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

const authenticateUser = async (username: string, password: string) => {
    const usersPath = path.join(__dirname, '../constant/users.json');
    const usersData = await fs.readFile(usersPath, 'utf8');
    const users = JSON.parse(usersData);

    const user = users.find((user: UserInterface) => user.email === username && user.password === password);
    
    if (user) {
        const userData: UserDataInterface = {
            id: user.id,
            email: user.username,
            firstName: user.firstName,
            lastName: user.lastName
        };
            
        const token = jwt.sign(
            { userData },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return { success: true, token };
    }

    return { success: false, message: 'Invalid credentials' };
};

export const authController = (req: Request, res: Response) => {
    if (!req.body?.username || !req.body?.password) {
        res.status(400).json({ message: 'Username and password are required' });
    } 

    authenticateUser(req.body.username, req.body.password)
        .then(result => res.json(result))
        .catch(error => res.status(500).json({ message: 'Internal server error' }));
};

