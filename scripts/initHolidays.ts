import dotenv from 'dotenv';
import { loadHolidaysInDataBase } from '../src/services/holiday.service';

dotenv.config();

const { db } = require('../src/db/dataBase.config');

const exec = async () => {
  try {
    const currentYear = new Date().getFullYear();
    console.info('Starting process to load holidays by current year...');
    await loadHolidaysInDataBase(currentYear);
    console.info('Process finished succesfully');

  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  process.exit(0);
}

db.once('open', exec);