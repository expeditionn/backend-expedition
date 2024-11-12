import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import User from '../models/user.model.js';
import Seller from '../models/seller.model.js';

const secret = process.env.JWT_KEY;

export const signup = async (req, res) => {
  const { userType } = req.params; // 'user' or 'seller'
  const data = req.body;

  try {
    const model = userType === 'user' ? User : Seller;
    const existingUser = await model.findByEmail(data.email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = {
      id: uuidv4(),
      ...data,
      password: hashedPassword,
    };

    await model.create(newUser);
    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const signin = async (req, res) => {
  const { userType } = req.params; // 'user' or 'seller'
  const { email, password } = req.body;

  try {
    const model = userType === 'user' ? User : Seller;
    const user = await model.findByEmail(email);
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, userType }, secret, { expiresIn: '1d' });
    res.json({ message: 'Signin successful', token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};