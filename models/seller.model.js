import pool from '../config/db.config.js';

class Seller {
  constructor(seller) {
    // ...existing code...
    this.id = seller.id;
    this.first_name = seller.first_name;
    this.last_name = seller.last_name;
    this.email = seller.email;
    this.password = seller.password;
    // ...existing code...
  }

  static async create(newSeller) {
    const query = 'INSERT INTO seller SET ?';
    const [result] = await pool.query(query, newSeller);
    return result;
  }

  static async findByEmail(email) {
    const query = 'SELECT * FROM seller WHERE email = ?';
    const [rows] = await pool.query(query, [email]);
    return rows[0];
  }

  static async updateById(id, updatedSeller) {
    const query = 'UPDATE seller SET ? WHERE id = ?';
    const [result] = await pool.query(query, [updatedSeller, id]);
    return result;
  }

  static async deleteById(id) {
    const query = 'DELETE FROM seller WHERE id = ?';
    const [result] = await pool.query(query, [id]);
    return result;
  }

  static async findById(id) {
    const query = 'SELECT * FROM seller WHERE id = ?';
    const [rows] = await pool.query(query, [id]);
    return rows[0];
  }
}

export default Seller;