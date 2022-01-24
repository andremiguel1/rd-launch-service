import { Launch } from '../../model/launch-model';
import { Controller } from '../controller';
import { HttpClientHelper } from '../../helper/http-client-helper';

const URL_LAUNCH = 'https://api.spacexdata.com/v4/launches/latest';

export class GetLatestLaunchController implements Controller<Launch> {
  constructor(protected readonly httpClientHelper: HttpClientHelper<Launch>) {}

  public async handle(): Promise<Launch> {
    console.log('Get Latest Launch Controller Handle: start');
    const { data } = await this.httpClientHelper.get<Launch>(URL_LAUNCH);
    const { id, date_local, details, flight_number, name } = data as Launch;
    console.log('Get Latest Launch Controller Handle: finish');
    return { id, date_local, details, flight_number, name };
  }
}
