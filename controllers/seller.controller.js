import Seller from '../models/seller.model.js';

export const updateSellerProfile = async (req, res) => {
  const sellerId = req.user.id;
  const updatedData = req.body;
  try {
    await Seller.updateById(sellerId, updatedData);
    res.status(200).json({ message: 'Seller profile updated successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating seller profile.', error });
  }
};

export const deleteSeller = async (req, res) => {
  const sellerId = req.user.id;
  try {
    await Seller.deleteById(sellerId);
    res.status(200).json({ message: 'Seller account deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting seller account.', error });
  }
};

export const getSellerProfile = async (req, res) => {
  const sellerId = req.user.id;
  try {
    const seller = await Seller.findById(sellerId);
    if (!seller) {
      return res.status(404).json({ message: 'Seller not found.' });
    }
    res.status(200).json({ seller });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving seller profile.', error });
  }
};