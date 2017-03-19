import { Observable } from 'rxjs/Observable';
import { IUserDeviceService } from './user-device.service';

import { IUser } from '../../interfaces/IUser';

export default class UserDeviceServiceMock implements IUserDeviceService {
  public getUsersDeviceIds (id: number): Observable<number[]> {
    throw('mock not stubed - getUsersDeviceIds');
  }
}
