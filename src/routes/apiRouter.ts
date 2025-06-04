import { authController } from '../controllers/authController';
import { userController } from '../controllers/userController';
import { settingsController } from '../controllers/settingsController';
import { authMiddleware } from '../middleware/authMiddleware';
import express, { RequestHandler } from 'express';

const router = express.Router();

router.post('/login', authController as RequestHandler);
router.get('/settings', authMiddleware as RequestHandler, settingsController as RequestHandler);
router.get('/users', authMiddleware as RequestHandler, userController as RequestHandler);

export default router; 