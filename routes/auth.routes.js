import express from 'express';
import { signup, signin } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup/:userType', signup);
router.post('/signin/:userType', signin);


export default router;