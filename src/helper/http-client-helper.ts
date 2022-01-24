import { HttpClientModel } from '../model/http-client-model';

export interface HttpClientHelper<T> {
  get<T>(url: string, params?: object | undefined): Promise<HttpClientModel<T>>;
}
