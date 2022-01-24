import express, { Request, Response } from 'express';
import { Controller } from '../controllers/controller';
import { GetNextLaunchController } from '../controllers/impl/get-next-launch-controller';
import { HttpClientHelper } from '../helper/http-client-helper';
import { AxiosClientHelper } from '../helper/impl/axios-client-helper';
import { Launch } from '../model/launch-model';

const nextLaunchRouter = express.Router();

nextLaunchRouter.get('/next', async (req: Request, res: Response) => {
  console.log('Next launch router: start');
  const helper: HttpClientHelper<Launch> = new AxiosClientHelper();
  const controller: Controller<Launch> = new GetNextLaunchController(helper);
  const latestLaunch = await controller.handle();
  console.log('Next launch router: finish');
  return res.send(latestLaunch);
});

export { nextLaunchRouter };
