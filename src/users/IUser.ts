import { IDevice } from '../devices/IDevice';

export interface IUser {
  id: number;
  name: string;
  devices: Array<IDevice>;
}
