import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
  try {
    let currentContacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));

    currentContacts.push(createFakeContact());

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(currentContacts, null, 2),
      'utf-8',
    );
  } catch (error) {
    console.error('Помилка додавання(читання) даних:', error);
  }
};

await addOneContact();
