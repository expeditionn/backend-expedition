import bcrypt from 'bcryptjs';

const hash = async (inp) => {
    try {
        const salt = await bcrypt.genSalt(11);
        const hashed = await bcrypt.hash(inp, salt);
        return hashed;
    } catch (error) {
        console.error('Error in hash.js:', error);
        return false;
    }
}

const compare = async (inp, hash) => {
    try {
        const isMatch = await bcrypt.compare(inp, hash);
        return isMatch;
    } catch (error) {
        console.error('Error in hash.js:', error);
        return false;
    }
}

export default { hash, compare };