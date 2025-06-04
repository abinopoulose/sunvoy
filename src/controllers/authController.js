const jwt = require('jsonwebtoken');
require('dotenv').config();

const DEMO_USER = {
    username: "demo@example.org",
    password: "test"
};

const authenticateUser = (username, password) => {
    if (username === DEMO_USER.username && password === DEMO_USER.password) {
        token = jwt.sign(
            { username },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return { success: true, token };
    }
    return {
        success: false,
        message: 'Invalid credentials'
    };
};

const login = (req, res) => {
    
    if (!req.body?.username || !req.body?.password) {
        return res.status(400).json({
            success: false,
            message: 'Username and password are required'
        });
    } 

    const authResult = authenticateUser(req.body.username, req.body.password);
    
    return res.json(authResult);
    
};

module.exports = {
    login
}; 