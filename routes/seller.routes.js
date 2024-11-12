import express from 'express';
import authenticateToken from '../middleware/auth.js';
import { updateSellerProfile, deleteSeller, getSellerProfile } from '../controllers/seller.controller.js';

const router = express.Router();

router.put('/profile', authenticateToken, updateSellerProfile);
router.get('/profile', authenticateToken, getSellerProfile); // New route to get seller profile
router.delete('/', authenticateToken, deleteSeller);

export default router;