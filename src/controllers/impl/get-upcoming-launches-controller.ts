import { Launch } from '../../model/launch-model';
import { Controller } from '../controller';
import { HttpClientHelper } from '../../helper/http-client-helper';

const URL_LAUNCH = 'https://api.spacexdata.com/v4/launches/upcoming';

export class GetUpcomingLaunchesController
  implements Controller<Array<Launch>>
{
  constructor(protected readonly httpClientHelper: HttpClientHelper<Launch>) {}

  public async handle(): Promise<Array<Launch>> {
    console.log('Get Upcoming Launches Controller Handle: start');
    const { data } = await this.httpClientHelper.get<Array<Launch>>(URL_LAUNCH);
    const itemsToReturn = data?.slice(0, 10).map(p => {
      const { id, date_local, details, flight_number, name } = p;
      return { id, date_local, details, flight_number, name };
    }) as Array<Launch>;

    console.log('Get Upcoming Launches Controller Handle: finish');

    return itemsToReturn;
  }
}
