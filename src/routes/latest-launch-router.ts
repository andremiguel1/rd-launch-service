import express, { Request, Response } from 'express';
import { Controller } from '../controllers/controller';
import { GetLatestLaunchController } from '../controllers/impl/get-latest-launch-controller';
import { HttpClientHelper } from '../helper/http-client-helper';
import { AxiosClientHelper } from '../helper/impl/axios-client-helper';
import { Launch } from '../model/launch-model';

const latestLaunchRouter = express.Router();

latestLaunchRouter.get('/latest', async (req: Request, res: Response) => {
  console.log('Latest launch router: start');
  const helper: HttpClientHelper<Launch> = new AxiosClientHelper();
  const controller: Controller<Launch> = new GetLatestLaunchController(helper);
  const latestLaunch = await controller.handle();
  console.log('Latest launch router: finish');
  return res.send(latestLaunch);
});

export { latestLaunchRouter };
