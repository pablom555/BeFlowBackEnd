import { Request, Response } from 'express';
import { getHolidaysList, getHoliday } from '../services/holiday.service';

async function getHolidays(req: Request, res: Response) {
  try {

    const yearFilter: number | undefined = !isNaN(Number(req.query.year)) ? Number(req.query.year) : undefined;

    const holidaysDB = await getHolidaysList(yearFilter);

    return res.status(200).send(holidaysDB);
    
  } catch (error) {    
    return res.status(500).send(`Error: ${error}`);
  }
}

async function getHolidaysByID(req: Request, res: Response) {

  try {
    const { id } = req.params
    const holidayDB = await getHoliday(id);
    
    if (holidayDB) {
      return res.status(200).send(holidayDB);
    } else {
      return res.status(404).send("Holiday not Found");
    }
    
  } catch (error) {    
    return res.status(500).send(`Error: ${error}`);
  }
}

export { 
  getHolidays,
  getHolidaysByID
}