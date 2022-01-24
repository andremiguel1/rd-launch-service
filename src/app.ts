import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import { NotFoundError } from './common/errors/not-found-error';
import { errorHandler } from './common/middlewares/error-handler';
import { latestLaunchRouter } from './routes/latest-launch-router';

const app = express();
app.use(json());

app.set('trust proxy', true);
app.use(latestLaunchRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
