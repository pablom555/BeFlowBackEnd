import express, { Express } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

import appRoutes from './src/routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(morgan('dev'));

app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Remove express header
app.use((req, res, next) => {
  res.removeHeader('X-Powered-By');
  next();
});

app.use('/api/v1', appRoutes);

console.log('Starting Server...');

require('./src/db/dataBase.config');

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});