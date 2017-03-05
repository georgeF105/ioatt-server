import { Observable } from 'rxjs/Observable';

import DeviceService, { IDeviceService } from '../services/devices.service';
import { IDevice } from './IDevice';

export class DeviceController implements IDeviceController {
  constructor (
    private deviceService: IDeviceService
  ) {
  }

  public getDevice (id: number): Observable<IDevice> {
    return this.deviceService.getDevice(id);
  };
}

export interface IDeviceController {
  getDevice (id: number): Observable<IDevice>;
}

export default new DeviceController (
  DeviceService
);
