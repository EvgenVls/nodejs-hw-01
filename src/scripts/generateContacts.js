import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    let currentContacts = JSON.parse(data);

    let newContacts = [];

    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }

    const allContacts = currentContacts.concat(newContacts);

    await fs.writeFile(PATH_DB, JSON.stringify(allContacts), 'utf-8');
  } catch (error) {
    console.error('Помилка додавання(читання) даних:', error);
  }
};

await generateContacts(5);
