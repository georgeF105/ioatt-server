import { Observable } from 'rxjs/Observable';

import UserRepository from '../repositories/users.repository';
import { IUserRepository } from '../repositories/users.repository';
import { IUser } from './IUser';

export class UserService implements IUserService {
  constructor (
    private userRepository: IUserRepository
  ) {}

  public getUser (id: number): Observable<IUser> {
    return this.userRepository.getUser(id);
  }
}

export interface IUserService {
  getUser (id: number): Observable<IUser>;
}

export default new UserService (
  UserRepository
);
