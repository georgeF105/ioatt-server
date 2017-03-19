import { Observable } from 'rxjs/Observable';
import { IUserDeviceRepository } from './user-device.repository';

import { IDevice } from '../../interfaces/IDevice';

export default class UserDeviceRepositoryMock implements IUserDeviceRepository {
  public getUserJoins (userId: number): Observable<any[]> {
    throw('mock not stubed - getUserJoins');
  }

  public getDeviceJoins(deviceId: number): Observable<any[]> {
    throw('mock not stubbed - getDeviceJoins');
  }
}
