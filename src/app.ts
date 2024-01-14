import express, { Application, NextFunction, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';

import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import httpStatus from 'http-status';

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', router);

// testing

// app.post('/api/v1/users/create-user', async (req, res) => {
//   const { ...userData } = req.body;
//   console.log(userData);

//   const result = await Users.create(userData);

//   res.status(200).send(result);
// });

// app.get('/api/v1/users', async (req, res) => {
//   const result = await Users.find({});

//   res.status(200).send(result);
// });

// handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Route not found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'Api not found',
      },
    ],
  });
  next();
});

app.use(globalErrorHandler);

export default app;
