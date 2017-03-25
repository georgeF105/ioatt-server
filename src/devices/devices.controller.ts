import { Observable } from 'rxjs/Observable';

import DeviceService, { IDeviceService } from '../services/device/devices.service';
import { IDevice } from '../interfaces/IDevice';

export class DeviceController implements IDeviceController {
  constructor (
    private deviceService: IDeviceService
  ) {
  }

  public getDevice (id: number): Observable<IDevice> {
    return this.deviceService.getDevice(id);
  }

  public makeDevice (device: IDevice): Observable<any> {
    return this.deviceService.makeDevice(device);
  }
}

export interface IDeviceController {
  getDevice (id: number): Observable<IDevice>;
  makeDevice (device: IDevice): Observable<any>;
}

export default new DeviceController (
  DeviceService
);
