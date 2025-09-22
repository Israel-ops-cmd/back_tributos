import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import 'express-async-errors';
import ErrorHandleMiddleware from '../middlewares/ErrorHandleMiddleware.js';
import { AppDataSource } from '../typeorm/data-source.js';
import { errors } from 'celebrate';

AppDataSource.initialize()
  .then(async () => {
    console.log('✅ Connected to the database!');

    const app = express();
    app.use(cors());
    app.use(express.json());

    app.use(routes);
    app.use(errors());
    app.use(ErrorHandleMiddleware.handleError);

    const PORT = process.env.PORT || 3334;
    app.listen(PORT, () => {
      console.log(`🚀 Server started on port ${PORT}!`);
    });
  })
  .catch(error => {
    console.error('❌ Failed to connect to the database:', error);
  });
