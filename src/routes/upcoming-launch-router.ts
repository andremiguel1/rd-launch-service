import express, { Request, Response } from 'express';
import { Controller } from '../controllers/controller';
import { GetPastLaunchesController } from '../controllers/impl/get-past-launches-controller';
import { GetUpcomingLaunchesController } from '../controllers/impl/get-upcoming-launches-controller';
import { HttpClientHelper } from '../helper/http-client-helper';
import { AxiosClientHelper } from '../helper/impl/axios-client-helper';
import { Launch } from '../model/launch-model';

const upcomingLaunchesRouter = express.Router();

upcomingLaunchesRouter.get('/upcoming', async (req: Request, res: Response) => {
  console.log('Upcoming launches router: start');
  const helper: HttpClientHelper<Array<Launch>> = new AxiosClientHelper();
  const controller: Controller<Array<Launch>> =
    new GetUpcomingLaunchesController(helper);
  const latestLaunch = await controller.handle();
  console.log('Upcoming launches router: finish');
  return res.send(latestLaunch);
});

export { upcomingLaunchesRouter };
