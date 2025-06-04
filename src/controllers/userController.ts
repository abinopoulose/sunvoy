import { Request, Response } from 'express';
import { UserInterface } from '../interfaces/user.interface';
const fs = require('fs').promises;
const path = require('path');

export const userController = async (req: Request, res: Response) => {
    try {
        const usersPath = path.join(__dirname, '../constant/users.json');
        const usersData = await fs.readFile(usersPath, 'utf8');
        const userList = JSON.parse(usersData) as UserInterface[];
        const sanitizedUserList = userList.map(({ password, ...user }) => user);
        res.json(sanitizedUserList);
    } catch (error) {
        res.status(500).json({message: 'Error fetching users'});
    }
};

