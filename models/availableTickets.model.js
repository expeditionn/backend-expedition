import pool from '../config/db.config.js';

class AvailableTicket {
  constructor(ticket) {
    this.id = ticket.id;
    this.title = ticket.title;
    this.type = ticket.type;
    this.place = ticket.place;
    this.show_name = ticket.show_name;
    this.description = ticket.description;
    this.seller = ticket.seller;
    this.time = ticket.time;
    this.date = ticket.date;
    this.available = ticket.available;
    this.noOfTickets = ticket.noOfTickets;
    this.created_at = ticket.created_at;
  }

  static async create(newTicket) {
    const query = 'INSERT INTO availableTickets SET ?';
    const [result] = await pool.query(query, newTicket);
    return result;
  }

  static async updateById(id, updatedTicket) {
    const query = 'UPDATE availableTickets SET ? WHERE id = ?';
    const [result] = await pool.query(query, [updatedTicket, id]);
    return result;
  }

  static async findById(id) {
    const query = 'SELECT * FROM availableTickets WHERE id = ?';
    const [rows] = await pool.query(query, [id]);
    return rows[0];
  }

  static async deleteById(id) {
    const query = 'DELETE FROM availableTickets WHERE id = ?';
    const [result] = await pool.query(query, [id]);
    return result;
  }
  static async findAll() {
    const query = 'SELECT * FROM availableTickets';
    const [rows] = await pool.query(query);
    return rows;
  }

  static async findAvailable() {
    const query = 'SELECT * FROM availableTickets WHERE available = true';
    const [rows] = await pool.query(query);
    return rows;
  }

  static async search(searchQuery) {
    const query = 'SELECT * FROM availableTickets WHERE title LIKE ? OR type LIKE ? OR place LIKE ? OR show_name LIKE ?';
    const likeQuery = `%${searchQuery}%`;
    const [rows] = await pool.query(query, [likeQuery, likeQuery, likeQuery, likeQuery]);
    return rows;
  }
}

export default AvailableTicket;