import express, { Request, Response } from 'express';
import { Controller } from '../controllers/controller';
import { GetPastLaunchesController } from '../controllers/impl/get-past-launches-controller';
import { HttpClientHelper } from '../helper/http-client-helper';
import { AxiosClientHelper } from '../helper/impl/axios-client-helper';
import { Launch } from '../model/launch-model';

const pastLaunchesRouter = express.Router();

pastLaunchesRouter.get('/past', async (req: Request, res: Response) => {
  console.log('Past launches router: start');
  const helper: HttpClientHelper<Array<Launch>> = new AxiosClientHelper();
  const controller: Controller<Array<Launch>> = new GetPastLaunchesController(
    helper,
  );
  const latestLaunch = await controller.handle();
  console.log('Past launches router: finish');
  return res.send(latestLaunch);
});

export { pastLaunchesRouter };
