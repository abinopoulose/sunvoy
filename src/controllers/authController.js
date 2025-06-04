const jwt = require('jsonwebtoken');
require('dotenv').config();

const DEMO_USER = {
    id: "88619348-dbd9-4334-9290-241a7f17dd31",
    username: "demo@example.org",
    password: "test",
    firstName: "John",
    lastName: "Doe",
};

const authenticateUser = (username, password) => {
    if (username === DEMO_USER.username && password === DEMO_USER.password) {
        userData = { id: DEMO_USER.id, username: DEMO_USER.username, firstName: DEMO_USER.firstName, lastName: DEMO_USER.lastName }
            
        token = jwt.sign(
            { userData },
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