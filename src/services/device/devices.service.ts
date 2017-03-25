import { Observable } from 'rxjs/Observable';

import DeviceRepository from '../../repositories/device/device.repository';
import { IDeviceRepository } from '../../repositories/device/device.repository';
import { IDevice } from '../../interfaces/IDevice';

export class DeviceService implements IDeviceService {
  constructor (
    private deviceRepository: IDeviceRepository
  ) {}

  public getDevice (id: number): Observable<IDevice> {
    return this.deviceRepository.getDevice(id)
    .flatMap(device => {
      return this.deviceRepository.getDevicesSensors(id)
      .map(sensors => {
        device.sensors = sensors;
        return device;
      });
    })
    .flatMap(device => {
      return this.deviceRepository.getDevicesActuators(id)
      .map(actuators => {
        device.actuators = actuators;
        return device;
      });
    });
  }

  public makeDevice (device): Observable<any> {
    return this.deviceRepository.makeDevice(device)
    .map(result => {
      return { id: result };
    });
  }
}

export interface IDeviceService {
  getDevice (id: number): Observable<IDevice>;
  makeDevice (device: IDevice): Observable<any>;
}

export default new DeviceService (
  DeviceRepository
);
