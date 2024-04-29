import "reflect-metadata"
import express, { Request, Response, NextFunction } from 'express';
import routes from './routes';
import cors from 'cors';
import AppError from '@shared/errors/AppError';
import "@shared/typeorm";

const app = express();
const PORT = 3333;

app.use(cors());
app.use(express.json());

app.use(routes);
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    // if error is equal apperror (your structure and keys and name and more than more)
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }
    // else return an generic message error
    return response.status(500).json({
        status: "error",
        message: "Internal server Error."
    })
  },
);

app.listen(PORT, () => {
  console.log(`[!] server started on port ${PORT}`);
});
