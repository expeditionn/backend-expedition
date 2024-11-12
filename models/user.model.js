import pool from '../config/db.config.js';

class User {
  constructor(user) {
    this.id = user.id;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.password = user.password;
  }

  static async create(newUser) {
    const query = 'INSERT INTO user SET ?';
    const [result] = await pool.query(query, newUser);
    return result;
  }

  static async findById(id) {
    const query = 'SELECT * FROM user WHERE id = ?';
    const [rows] = await pool.query(query, [id]);
    return rows[0];
  }

  static async findByEmail(email) {
    const query = 'SELECT * FROM user WHERE email = ?';
    const [rows] = await pool.query(query, [email]);
    return rows[0];
  }

  static async updateById(id, updatedUser) {
    const query = 'UPDATE user SET ? WHERE id = ?';
    const [result] = await pool.query(query, [updatedUser, id]);
    return result;
  }

  static async deleteById(id) {
    const query = 'DELETE FROM user WHERE id = ?';
    const [result] = await pool.query(query, [id]);
    return result;
  }
}

export default User;