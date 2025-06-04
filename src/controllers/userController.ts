import { Request, Response } from 'express';
const fs = require('fs').promises;
const path = require('path');

export const userController = async (req: Request, res: Response) => {
    try {
        const usersPath = path.join(__dirname, '../constant/users.json');
        const usersData = await fs.readFile(usersPath, 'utf8');
        const users = JSON.parse(usersData);
        
        res.json(users);
    } catch (error) {
        res.status(500).json({message: 'Error fetching users'});
    }
};

