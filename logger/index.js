import fs from 'fs/promises';
import helper from './helper.js';

const errLogger = async (errMessage, module) => {
    try {
        await fs.access('./logger/error.json');
    } catch (err) {
        await fs.writeFile('./logger/error.json', JSON.stringify([]));
    } finally {
        const array = await helper.textToJson(await fs.readFile('./logger/error.json', 'utf-8'));
        if (array.length > 100) {
            array.shift();
        }
        const nextId = array.length > 0 ? Math.max(...array.map(entry => entry.id)) + 1 : 1;
        array.push({ id: nextId, errMessage, module, timestamp: new Date().toISOString(), fixed: false });
        await fs.writeFile('./logger/error.json', await helper.jsonToText(array, null, 2));
    }
}

export default {errLogger}