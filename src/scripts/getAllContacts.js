import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  return JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
};

console.log(await getAllContacts());
