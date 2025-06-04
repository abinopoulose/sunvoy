
const authController  = require('../controllers/authController');
const userController = require('../controllers/userController');
const settingsController = require('../controllers/settingsController');
const authMiddleware  = require('../middleware/authMiddleware');
const express = require('express');

const router = express.Router();

router.post('/login', authController);
router.get('/settings', authMiddleware, settingsController);
router.get('/users', authMiddleware, userController);

module.exports = router; 