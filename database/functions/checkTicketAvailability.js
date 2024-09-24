import db from '../db.js';
const checkTicketAvailability = async (ticketId) => {
    const query = `SELECT * FROM availableTickets WHERE id = ${ticketId}`;
    try{
        const [result] = await db.query(query);
        if(result.length === 0){
            return {err: 'Ticket not found'};
        }
        return result[0];
    }catch(err){
        return {err: 'Internal Server Error'};
    }
};

export default checkTicketAvailability;