
import express from 'express';
import { searchTickets } from '../controllers/availableTickets.controller.js';

const router = express.Router();

router.get('/search', searchTickets); // Search tickets

export default router;