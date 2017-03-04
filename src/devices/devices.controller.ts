import DeviceService from './devices.service';
import { IDeviceService } from './devices.service';
import { IDevice } from './IDevice';

export class DeviceController implements IDeviceController {
  constructor (
    private deviceService: IDeviceService
  ) {
  }

  public getDevice (id: number): IDevice {
    return this.deviceService.getDevice(id);
  }
}

export interface IDeviceController {
  getDevice (id: number): IDevice;
}

export default new DeviceController (
  DeviceService
);
