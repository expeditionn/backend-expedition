import { v4 as uuidv4 } from 'uuid';
import AvailableTicket from '../models/availableTickets.model.js';
import TicketSold from '../models/ticketsSold.model.js';

export const buyTicket = async (req, res) => {
  const userId = req.user.id;
  const ticketId = req.params.id;

  try {
    const ticket = await AvailableTicket.findById(ticketId);
    if (!ticket || !ticket.available) {
      return res.status(404).json({ message: 'Ticket not available.' });
    }

    if (ticket.noOfTickets <= 0) {
      return res.status(400).json({ message: 'No tickets remaining.' });
    }

    // Decrease ticket quantity
    await AvailableTicket.updateById(ticketId, {
      noOfTickets: ticket.noOfTickets - 1,
      available: ticket.noOfTickets - 1 > 0,
    });

    const newTicketSold = {
      id: uuidv4(),
      place: ticket.place,
      show_name: ticket.show_name,
      buyer: userId,
      seller: ticket.seller,
      time: ticket.time,
      date: ticket.date,
    };

    await TicketSold.create(newTicketSold);
    res.status(200).json({ message: 'Ticket purchased successfully.', ticketId: newTicketSold.id });
  } catch (error) {
    res.status(500).json({ message: 'Error purchasing ticket.', error });
  }
};

export const getSoldTickets = async (req, res) => {
  try {
    const soldTickets = await TicketSold.findAll();
    res.status(200).json({ soldTickets });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching sold tickets.', error });
  }
};