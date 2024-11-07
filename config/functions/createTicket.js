import db from '../db.js';
import tokenGenerator from '../../helpers/tokenGenerator.js';

const createTicket = async (data) => {
    try {
        data.id = await tokenGenerator();
        const query = `INSERT INTO availableTickets 
            (id, type, title, place, show_name, description, seller, time, date, available, noOfTickets) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        const values = [
            data.id,
            data.type,
            data.title,
            data.place,
            data.show_name || null,
            data.description,
            data.seller,
            data.time,
            data.date,
            data.available !== undefined ? data.available : true,
            data.noOfTickets
        ];

        await db.query(query, values);

        return { id: data.id };
    } catch (error) {
        console.error('Error in createTicket.js:', error);
        return { err: 'Internal Server Error' };
    }
};

export default createTicket;
