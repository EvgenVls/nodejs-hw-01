import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  return JSON.parse(await fs.readFile(PATH_DB, 'utf-8')).length;
};

console.log(await countContacts());
