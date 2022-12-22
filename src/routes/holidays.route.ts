

import { Router } from 'express';
import { getHolidays, getHolidaysByID } from '../controllers/holidays.controller';

const holidaysRoutes: Router = Router();

// Get all holidays
holidaysRoutes.get('/', getHolidays);

// Get holiday by Id
holidaysRoutes.get('/:id', getHolidaysByID);

export default holidaysRoutes;