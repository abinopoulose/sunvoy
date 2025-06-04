const express = require('express');
const router = express.Router();
const { getSettings } = require('../controllers/settingsController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.get('/settings', authenticateToken, getSettings);

module.exports = router; 