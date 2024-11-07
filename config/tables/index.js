import db from '../db.js';
import userQuery from './userTable.js';
import ticketQuery from './tickets.js';
import ticketAvail from './availableTickets.js';
import sellerQuery from './seller.js';

const runQuery = async (query, tableName) => {
    try {
        await db.query(query);
        console.log(`${tableName} Checked`);
        return true;
    } catch (err) {
        console.error(`Error checking ${tableName} Table:`, err);
        return false;
    }
};

const checkTables = async () => {
    console.log("Starting table checks");

    const checks = [
        { query: userQuery, name: 'Users' },
        { query: ticketQuery, name: 'Tickets' },
        { query: ticketAvail, name: 'Available Tickets' },
        { query: sellerQuery, name: 'Seller' }
    ];

    const results = await Promise.all(checks.map(({ query, name }) => runQuery(query, name)));
    const allTablesChecked = results.every(result => result);

    if (allTablesChecked) {
        console.log("All tables checked successfully");
    } else {
        console.log("Some tables failed to check");
    }

    return allTablesChecked;
};

export default checkTables;
