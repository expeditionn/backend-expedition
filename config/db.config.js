import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const db_config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false
  }
}

const pool = mysql.createPool(db_config);

export default pool;