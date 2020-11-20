import { Response, Request, NextFunction } from 'express';

import logger from '../utils/logger';
import elastic from '../utils/elastic';

const getActualRequestDurationInMilliseconds = (
  start: [number, number] | undefined,
) => {
  const NS_PER_SEC = 1e9;
  const NS_TO_MS = 1e6;
  const diff = process.hrtime(start);
  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};

export default function midlog(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const currentDatetime = new Date();
  const formattedDate = `${currentDatetime.getFullYear()}-${
    currentDatetime.getMonth() + 1
  }-${currentDatetime.getDate()} ${currentDatetime.getHours()}:${currentDatetime.getMinutes()}:${currentDatetime.getSeconds()}`;

  const { method } = request;
  const { url } = request;
  const status = response.statusCode;
  const start = process.hrtime();
  const durationInMilliseconds = getActualRequestDurationInMilliseconds(start);

  const infoRequest = `[${formattedDate}] ${method}:${url} ${status} ${durationInMilliseconds.toLocaleString()} ms`;

  logger.info(`[INFO] ${infoRequest}`);

  elastic.index({
    index: 'logs',
    body: {
      infoRequest,
    },
  });

  return next();
}
