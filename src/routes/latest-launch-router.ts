import express, { Request, Response } from 'express';
import { Controller } from '../controllers/controller';
import { GetLatestLaunchController } from '../controllers/impl/get-latest-launch-controller';
import { HttpClientHelper } from '../helper/http-client-helper';
import { AxiosClientHelper } from '../helper/impl/axios-client-helper';
import { Launch } from '../model/launch-model';

const route = express.Router();

route.get('/latest', async (req: Request, res: Response) => {
  console.log('Launch router start');
  const helper: HttpClientHelper<Launch> = new AxiosClientHelper();
  const controller: Controller<Launch> = new GetLatestLaunchController(helper);
  const latestLaunch = await controller.handle();
  console.log('Launch router finish');
  return res.send(latestLaunch);
});

export { route as latestLaunchRouter };
