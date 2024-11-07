import db from "../db.js";
import hash from "../../helpers/hash.js";
import tokenGenerator from "../../helpers/tokenGenerator.js";

const createUser = async (user) => {
    try {
        user.password = await hash.hash(user.password);
        user.id = await tokenGenerator();

        const query = `INSERT INTO seller (
            id,
            first_name,
            last_name,
            email,
            phone,
            password,
            works_at,
            position
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

        const values = [
            user.id,
            user.first_name,
            user.last_name,
            user.email,
            user.phone,
            user.password,
            user.works_at || null,
            user.position || null 
        ];

        await db.query(query, values);
        return user;
    } catch (error) {
        console.error('Error in createSeller.js:', error);
        return false;
    }
};

export default createUser;
