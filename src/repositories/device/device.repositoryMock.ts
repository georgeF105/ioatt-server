import { Observable } from 'rxjs/Observable';
import { IDeviceRepository } from './device.repository';

import { IDevice } from '../../interfaces/IDevice';
import { IUser } from '../../interfaces/IUser';

export default class DeviceRepositoryMock implements IDeviceRepository {
  public getDevice (id: number): Observable<IDevice> {
    throw('mock not stubed - getDevice');
  }

  public getDevicesUsers (deviceId: number): Observable<IUser[]> {
    throw('mock not stubed - getDevicesUsers');
  }

  public makeDevice(device: IDevice): Observable<number> {
    throw('mock not stubbed - makeDevice');
  }
}
