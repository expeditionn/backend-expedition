import db from '../db.js';

const getDataByMail = async (mail, type) => {
    const tableName = type === 'user' ? 'user' : 'seller';
    const query = `SELECT * FROM ?? WHERE email = ?`;
    const values = [tableName, mail];

    try {
        const [rows] = await db.query(query, values);
        if (rows.length === 0) {
            return { err: 'User not found' };
        }
        return rows[0];
    } catch (err) {
        console.error('Error in getDataByMail.js:', err);
        return false;
    }
};

export default getDataByMail;
