import { Launch } from '../model/launch-model';

export interface Controller<T> {
  handle(): Promise<T>;
}
