import pool from '../config/db.config.js';

class TicketSold {
  constructor(ticket) {
    this.id = ticket.id;
    this.place = ticket.place;
    this.show_name = ticket.show_name;
    this.buyer = ticket.buyer;
    this.seller = ticket.seller;
    this.time = ticket.time;
    this.date = ticket.date;
    this.time_of_booking = ticket.time_of_booking;
  }

  static async create(newTicketSold) {
    const query = 'INSERT INTO ticketsSold SET ?';
    const [result] = await pool.query(query, newTicketSold);
    return result;
  }

  static async findAll() {
    const query = 'SELECT * FROM ticketsSold';
    const [rows] = await pool.query(query);
    return rows;
  }
}

export default TicketSold;