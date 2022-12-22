import { Document, Types,  } from 'mongoose';
import Holiday from '../schemas/holidays.schema';
import { IHoliday } from '../schemas/holidays.schema';

async function saveHoliday (holidayData: IHoliday): Promise<Document<unknown, any, IHoliday>> {
  const holiday = new Holiday();
  const {day, id, info, month, reason, type, year} = holidayData;

  holiday.day = day;
  holiday.id = id;
  holiday.info = info;
  holiday.month = month;
  holiday.reason = reason;
  holiday.type = type;
  holiday.year = year;

  return holiday.save();
}

async function getHolidaysByYear (year: number):
Promise<(Document<unknown, any, IHoliday> & IHoliday & {_id: Types.ObjectId;})[]> {
  return Holiday.find({year});
}

async function getAllHolidays (): 
  Promise<(Document<unknown, any, IHoliday> & IHoliday & {_id: Types.ObjectId;})[]> {
  return Holiday.find().sort([['year', -1], ['month', 1], ['day', 1]]);
}

async function getHolidayByID (id: string):
  Promise<(Document<unknown, any, IHoliday> & IHoliday & {_id: Types.ObjectId;}) | null> {
  return Holiday.findById(id);
}

async function deleteHolidaysByYear (year: number) {
  return Holiday.deleteMany({year});
}

export {
  saveHoliday,
  deleteHolidaysByYear,
  getAllHolidays,
  getHolidaysByYear,
  getHolidayByID
}