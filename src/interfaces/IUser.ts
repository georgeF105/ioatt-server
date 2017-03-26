import { IDevice } from '../interfaces/IDevice';

export interface IUser {
  id: number;
  uid: string;
  name: string;
  devices: Array<IDevice>;
}
