import mongoose, { ConnectOptions } from 'mongoose';

const DATA_BASE = process.env.LOCAL_MONGO_URI;

mongoose.set("strictQuery", false);
mongoose.connect(DATA_BASE!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: true
} as ConnectOptions);

const db = mongoose.connection;

db.on('error', () => {
  console.log('Error trying to connect to the DB');
});

db.once('open', () => {
  console.log(`⚡️[DataBase]: Connected to ${DATA_BASE}`);
});

module.exports = { db };

