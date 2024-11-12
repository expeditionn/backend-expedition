
import express from 'express';
import authenticateToken from '../middleware/auth.js';
import { updateUserProfile, deleteUser, getUserProfile } from '../controllers/user.controller.js';

const router = express.Router();

router.put('/profile', authenticateToken, updateUserProfile);
router.get('/profile', authenticateToken, getUserProfile); // New route to get user profile
router.delete('/', authenticateToken, deleteUser);

export default router;