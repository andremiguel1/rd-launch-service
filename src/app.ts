import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';

const app = express();
app.use(json());
app.set('trust proxy', true);

app.all('*', async (req, res) => {
  // throw new NotFoundError();
  res.status(200).send('Oi');
});

// app.use(errorHandler);

export { app };