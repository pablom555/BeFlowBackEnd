import express, { Express } from 'express';
import holidaysRoutes from './holidays.route';

const appRoutes:Express = express();

appRoutes.use('/holidays', holidaysRoutes);

export default appRoutes;
