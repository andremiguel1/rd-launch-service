import axios from 'axios';
import { HttpClientModel } from '../../model/http-client-model';
import { HttpClientHelper } from '../http-client-helper';

export class AxiosClientHelper<T> implements HttpClientHelper<T> {
  async get<T>(url: string, params?: object): Promise<HttpClientModel<T>> {
    const { data, status: statusCode } = await axios.get(url);
    const objectToReturn: HttpClientModel<T> = {
      statusCode,
      data,
    };
    return objectToReturn;
  }
}
