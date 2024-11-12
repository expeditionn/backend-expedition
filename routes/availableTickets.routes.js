import express from 'express';
import authenticateToken from '../middleware/auth.js';
import { 
  createAvailableTicket, 
  updateAvailableTicket, 
  deleteAvailableTicket,
  getAllTickets,
  getAvailableTickets,
  getTicketById,
  searchTickets 
} from '../controllers/availableTickets.controller.js';

const router = express.Router();

// Seller routes
router.post('/', authenticateToken, createAvailableTicket);
router.put('/:id', authenticateToken, updateAvailableTicket);
router.delete('/:id', authenticateToken, deleteAvailableTicket);

// New routes
router.get('/', getAllTickets); // Get all tickets
router.get('/available', getAvailableTickets); // Get all available tickets
router.get('/:id', getTicketById); // Get ticket by ID
router.get('/search', searchTickets); // Search tickets

export default router;