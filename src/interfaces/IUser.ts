import { IDevice } from '../interfaces/IDevice';

export interface IUser {
  id: number;
  name: string;
  devices: Array<IDevice>;
}
