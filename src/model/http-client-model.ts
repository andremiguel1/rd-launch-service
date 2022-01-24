export interface HttpClientModel<T> {
  statusCode: number;
  data?: T | undefined;
  errors?: Array<string> | undefined;
}
