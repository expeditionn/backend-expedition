import express from 'express';
import authenticateToken from '../middleware/auth.js';
import { buyTicket, getSoldTickets } from '../controllers/ticketsSold.controller.js';

const router = express.Router();

// User routes
router.post('/buy/:id', authenticateToken, buyTicket);
router.get('/sold', authenticateToken, getSoldTickets); 

export default router;