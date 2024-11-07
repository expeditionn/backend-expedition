import tokenGenerator from "../../helpers/tokenGenerator.js";
const buyTicket = async (user_id, ticket_id) => {
    const query = `UPDATE ticket SET available = available - 1 WHERE id = ?;`;
    const values = [ticket_id];
    try {
        await db.query(query, values);
        const token = await tokenGenerator();
        const query2 = `INSERT INTO ticketsSold (id, user_id, ticket_id) VALUES (?, ?);`;
        const values2 = [user_id, ticket_id];
        await db.query(query2, values2);
        return true;
    } catch (err) {
        console.error('Error in buyTicket.js:', err);
        return false;
    }
}

export default buyTicket;