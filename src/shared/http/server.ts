import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import routes from './routes/index.js'; // se a pasta routes estiver no mesmo nível
import 'express-async-errors';

// Aqui usamos caminho relativo
import ErrorHandleMiddleware from '../middlewares/ErrorHandleMiddleware.js';
import { AppDataSource } from '../typeorm/data-source.js';

AppDataSource.initialize().then(async () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use(routes);
  app.use(ErrorHandleMiddleware.handleError);

  console.log('Connected to the database!');

  app.listen(3334, () => {
    console.log('Server started on port 3334!');
  });
}).catch(error => {
  console.error('Failed to connect to the database:', error);
});
