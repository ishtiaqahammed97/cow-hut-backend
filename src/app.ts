import express, { Application } from 'express';
const app: Application = express();
import cors from 'cors';

import router from './app/routes';

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

export default app;
