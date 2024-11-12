import User from '../models/user.model.js';

export const updateUserProfile = async (req, res) => {
  const userId = req.user.id;
  const updatedData = req.body;
  try {
    await User.updateById(userId, updatedData);
    res.status(200).json({ message: 'Profile updated successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile.', error });
  }
};

export const deleteUser = async (req, res) => {
  const userId = req.user.id;
  try {
    await User.deleteById(userId);
    res.status(200).json({ message: 'User account deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user account.', error });
  }
};

export const getUserProfile = async (req, res) => {
  const userId = req.user.id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user profile.', error });
  }
};