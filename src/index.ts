import { app } from './app';

const PORT: string | number = process.env.PORT || 5000;

const start = async () => {
  app.listen(PORT, () => {
    console.log('version: 1.0.0');
    console.log(`Listening on port ${PORT}!`);
  });
};

start();
