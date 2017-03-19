import { Observable } from 'rxjs/Observable';
import { IUserRepository } from './users.repository';

import { IUser } from '../../interfaces/IUser';

export default class UserRepositoryMock implements IUserRepository {
  public getUser (id: number): Observable<IUser> {
    throw('mock not stubed - getUser');
  }

  public makeUser(user: IUser): Observable<number> {
    throw('mock not stubbed - makeUser');
  }
}
