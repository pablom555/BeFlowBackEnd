import { getHolidays } from "../http/holidays";
import { GetHolidaysResponse } from "../http/holidays/interfaces";
import { deleteHolidaysByYear, saveHoliday, getAllHolidays, getHolidaysByYear, getHolidayByID } from './../db/dao/holiday.dao';

async function loadHolidaysInDataBase(year: number) {

  try {
    // Delete holiday's rows from dataBase
    const { deletedCount } = await deleteHolidaysByYear(year);
    console.info(`Deleted ${deletedCount} holidays from ${year} year.`);

    // get list of holidays from api
    const holidays = await getHolidays(year);
    console.info(`${holidays.length} holidays were obtained for the year ${year}.`);

    await Promise.all(holidays.map((holiday: GetHolidaysResponse) => saveHoliday({
      day: holiday.dia,
      id: holiday.id,
      info: holiday.info,
      month: holiday.mes,
      reason: holiday.motivo,
      type: holiday.tipo,
      year: year
    })));

    console.info(`Holidays inserted successfully.`);
 
    return true
  } catch (error) {
    console.error(error);
  }
}

async function getHolidaysList(year?: number) {
  return  year ? getHolidaysByYear(year) : getAllHolidays();
}

async function getHoliday(id: string) {
  return  getHolidayByID(id);
}


export {
  loadHolidaysInDataBase,
  getHolidaysList,
  getHoliday
}