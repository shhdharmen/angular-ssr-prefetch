import * as express from 'express';
import { APIData } from '../types';
export const router = express.Router();

router.use('/', (req, res) => {
  const datTime = Date.now();
  const data: APIData = {
    message: 'Hello World from API Router',
    success: true,
    datTime
  };
  res.send(data);
});
