import Api from '../api';

import {
  GetHolidaysResponse
} from './interfaces';

const api = new Api();

export const getHolidays = async (year: number, config?: any): Promise<GetHolidaysResponse[]> => api.get<GetHolidaysResponse[]>(`${year}`, config);
