const fs = require('fs').promises;
const path = require('path');

const userController = async (req, res) => {
    try {
        const usersPath = path.join(__dirname, '../constant/users.json');
        const usersData = await fs.readFile(usersPath, 'utf8');
        const users = JSON.parse(usersData);
        
        return res.json(users);
    } catch (error) {
        return res.status(500).json({message: 'Error fetching users'});
    }
};

module.exports = userController
