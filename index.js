import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.config.js';
import userRoutes from './routes/user.routes.js';
import availableTicketsRoutes from './routes/availableTickets.routes.js';
import ticketsSoldRoutes from './routes/ticketsSold.routes.js';
import authRoutes from './routes/auth.routes.js';
import sellerRoutes from './routes/seller.routes.js';
import searchRoutes from './routes/search.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/test', async (req, res) => {
  try {
    const [result] = await pool.query('SELECT 1');
    res.json({ message: 'Database connection successful', result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/available-tickets', availableTicketsRoutes);
app.use('/ticket-sold', ticketsSoldRoutes);
app.use('/seller', sellerRoutes);
app.use('/api', searchRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});