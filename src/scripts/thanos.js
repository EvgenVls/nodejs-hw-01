import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    const currentContacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    let newContacts = [];
    for (const contact of currentContacts) {
      if (Math.random() >= 0.5) {
        newContacts.push(contact);
      }
    }
    await fs.writeFile(PATH_DB, JSON.stringify(newContacts, null, 2), 'utf-8');
  } catch (error) {
    console.error('Помилка додавання(читання) даних:', error);
  }
};

await thanos();
