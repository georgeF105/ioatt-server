import { IDevice } from './IDevice';

export class DeviceRepository implements IDeviceRepository {
  public getDevice(id: number): IDevice {
    return <IDevice>{ name: `dummy device ${id}` };
  }
}

export interface IDeviceRepository {
  getDevice (id: number): IDevice;
}

export default new DeviceRepository ();
