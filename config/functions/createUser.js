import db from "../db.js";
import hash from "../../helpers/hash.js";
import tokenGenerator from "../../helpers/tokenGenerator.js";

const createUser = async (user) => {
    try {
        user.password = await hash.hash(user.password);
        user.id = await tokenGenerator();

        const query = `INSERT INTO user (
            id,
            first_name,
            last_name,
            email,
            phone,
            password
        ) VALUES (?, ?, ?, ?, ?, ?)`;

        const values = [
            user.id,
            user.first_name,
            user.last_name,
            user.email,
            user.phone,
            user.password
        ];

        await db.query(query, values);

        return user;
    } catch (err) {
        console.error('Error in createUser.js:', err);
        return false;
    }
};

export default createUser;
