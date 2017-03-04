import { Observable } from 'rxjs/Observable';

import DeviceRepository from './device.repository';
import { IDeviceRepository } from './device.repository';
import { IDevice } from './IDevice';

export class DeviceService implements IDeviceService {
  constructor (
    private deviceRepository: IDeviceRepository
  ) {}

  public getDevice (id: number): Observable<IDevice> {
    return this.deviceRepository.getDevice(id);
  }
}

export interface IDeviceService {
  getDevice (id: number): Observable<IDevice>;
}

export default new DeviceService (
  DeviceRepository
);
