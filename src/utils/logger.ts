import fs from 'fs';
import path from 'path';
import winston from 'winston';

import dotenv from 'dotenv';

dotenv.config();

const LOG_PATH =
  process.env.LOG_PATH || path.join(__dirname, '..', '..', 'log');

if (!fs.existsSync(LOG_PATH)) {
  fs.mkdirSync(LOG_PATH);
}

const logger = winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: path.join(LOG_PATH, 'error.log'),
      level: 'error',
    }),
    new winston.transports.File({
      filename: path.join(LOG_PATH, 'combined.log'),
    }),
  ],
});

export default logger;
