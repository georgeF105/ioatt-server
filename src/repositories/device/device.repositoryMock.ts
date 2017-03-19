import { Observable } from 'rxjs/Observable';
import { IDeviceRepository } from './device.repository';

import { IDevice } from '../../interfaces/IDevice';

export default class DeviceRepositoryMock implements IDeviceRepository {
  public getDevice (id: number): Observable<IDevice> {
    throw('mock not stubed - getDevice');
  }

  public makeDevice(device: IDevice): Observable<number> {
    throw('mock not stubbed - makeDevice');
  }
}
