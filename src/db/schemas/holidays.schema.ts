import mongoose, { Schema } from 'mongoose';

export interface IHoliday {
  day: number;
  id: string;
  info: string;
  month: number;
  reason: string;
  type: string;
  year: number;
}

const holidaySchema: Schema = new Schema({
    day: { type: Number, required: [true, 'The day is required'] },
    id: { type: String, required: [true, 'The id is required'] },
    info: { type: String, required: false },
    month: { type: Number, required: [true, 'The month is required'] },
    reason: {type: String, required: false},
    type: {type: String, required: false},
    year: { type: Number, required: [true, 'The year is required'] },
});


export default  mongoose.model<IHoliday>('Holiday', holidaySchema);