export interface HttpClientHelper {
  get<T>(url: string, params?: object | undefined): Promise<T>;
}
