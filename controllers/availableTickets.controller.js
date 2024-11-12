import AvailableTicket from '../models/availableTickets.model.js';
import {v4 as uuidv4} from 'uuid';


export const createAvailableTicket = async (req, res) => {
  const ticketData = req.body;
  try {
    const id = uuidv4()
    const result = await AvailableTicket.create({ ...ticketData, seller: req.user.id, id: id });
    res.status(201).json({ message: 'Ticket created successfully', ticket: result });
  } catch (error) {
    res.status(500).json({ message: 'Error creating ticket.', error });
  }
};

export const updateAvailableTicket = async (req, res) => {
  const ticketId = req.params.id;
  const updatedData = req.body;
  try {
    await AvailableTicket.updateById(ticketId, updatedData);
    res.status(200).json({ message: 'Ticket updated successfully', ticket: updatedData });
  } catch (error) {
    res.status(500).json({ message: 'Error updating ticket.', error });
  }
};

export const deleteAvailableTicket = async (req, res) => {
  const ticketId = req.params.id;
  try {
    await AvailableTicket.deleteById(ticketId);
    res.status(200).json({ message: 'Ticket deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting ticket.', error });
  }
};

export const getAllTickets = async (req, res) => {
  try {
    const tickets = await AvailableTicket.findAll();
    res.status(200).json({ tickets });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tickets.', error });
  }
};

export const getAvailableTickets = async (req, res) => {
  try {
    const tickets = await AvailableTicket.findAvailable();
    res.status(200).json({ tickets });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching available tickets.', error });
  }
};

export const getTicketById = async (req, res) => {
  const ticketId = req.params.id;
  try {
    const ticket = await AvailableTicket.findById(ticketId);
    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found.' });
    }
    res.status(200).json({ ticket });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching ticket.', error });
  }
};

export const searchTickets = async (req, res) => {
  const query = req.query;
  try {
    const tickets = await AvailableTicket.search(query);
    res.status(200).json({ tickets });
  } catch (error) {
    res.status(500).json({ message: 'Error searching tickets.', error });
  }
};