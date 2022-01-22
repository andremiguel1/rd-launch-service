import { app } from './app';

const start = async () => {
  app.listen(5000, () => {
    console.log('version: 1.0.0');
    console.log('Listening on port 5000!');
  });
};

start();
