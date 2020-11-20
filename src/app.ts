import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import routes from './routes';

import AppError from './errors/AppError';
import midlog from './middlewares/log';

import './database';

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(cors());
  }

  private routes(): void {
    this.express.use(midlog);
    this.express.use(routes);
    this.express.use(
      (err: Error, request: Request, response: Response, _: NextFunction) => {
        if (err instanceof AppError) {
          return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
          });
        }

        return response.status(500).json({
          status: 'error',
          message: 'Internal server error!',
        });
      },
    );
  }
}

export default new App().express;
