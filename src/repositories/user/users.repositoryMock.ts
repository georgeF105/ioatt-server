import { Observable } from 'rxjs/Observable';
import { IUserRepository } from './users.repository';

import { IUser } from '../../interfaces/IUser';
import { IDevice } from '../../interfaces/IDevice';

export default class UserRepositoryMock implements IUserRepository {
  public getUser (id: number): Observable<IUser> {
    throw('mock not stubed - getUser');
  }

  public getUsersDevices(userId: number): Observable<IDevice[]> {
    throw('mock not stubed - getDevicesUsers');
  }

  public makeUser(user: IUser): Observable<number> {
    throw('mock not stubbed - makeUser');
  }
}
