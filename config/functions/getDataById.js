import db from '../db.js';
const getUserById = async (id, type) => {
    const query = `SELECT * FROM ${type} WHERE id = ${id}`;
    try{
        const [result] = await db.query(query);
        if(result.length === 0){
            return {err: 'User not found'};
        }
        return result[0];
    }catch(err){
        return {err: 'Internal Server Error'};
    }
};

export default getUserById;