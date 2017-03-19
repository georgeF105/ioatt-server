import { Observable } from 'rxjs/Observable';
import { IDeviceService } from './devices.service';

import { IDevice } from '../../interfaces/IDevice';

export default class UserServiceMock implements IDeviceService {
  public getDevice (id: number): Observable<IDevice> {
    throw('mock not stubed - getUser');
  }

  public makeDevice(device: IDevice): Observable<number> {
    throw('mock not stubbed - makeUser');
  }
}
