import 'reflect-metadata';
import express, { NextFunction, Request, Response } from "express";
import 'express-async-errors'
import cors from 'cors';
import routes from './routes';
import AppError from "@shared/errors/AppError";
import '@shared/typeorm';
import { errors } from 'celebrate';
import uploadConfig from '@config/upload'


// Import Swagger (Documentation)
import swaggerUi from 'swagger-ui-express'; 
import swaggerSpec from 'src/config/swaggerConfig';


const app = express();

app.use(cors());
app.use(express.json());

app.use('/files', express.static(uploadConfig.directory));


// Import routes
app.use(routes);

// Import errors validation celebrate
app.use(errors());

// Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction): any => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log(`|SERVER| Started on port 3333! 🚀`);
});
