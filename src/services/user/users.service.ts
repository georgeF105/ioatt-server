import { Observable } from 'rxjs/Observable';
import admin from '../../config/firebaseConfig';

import UserRepository, { IUserRepository } from '../../repositories/user/users.repository';
import DeviceService, { IDeviceService } from '../device/devices.service';
import { IUser } from '../../interfaces/IUser';
import { IDevice } from '../../interfaces/IDevice';

export class UsersService implements IUsersService {
  constructor (
    private userRepository: IUserRepository
  ) {}

  public getUser (id: number): Observable<IUser> {
    return this.userRepository.getUser(id)
    .flatMap(user => {
      return this.userRepository.getUsersDevices(id)
      .map(devices => {
        user.devices = devices;
        return user;
      });
    });
  }

  public getCurrentUser (token: string): Observable<IUser> {
    return this.verifyUserToken(token)
    .flatMap(decodedToken => {
      return this.userRepository.getUserFromUid(decodedToken.uid);
    });
  }

  public verifyUser (token: string, id: number): Observable<boolean> {
    return this.verifyUserToken(token)
    .flatMap(decodedToken => {
      return this.getUser(id)
      .map(user => user.uid === decodedToken.uid);
    });
  }

  private verifyUserToken (token: string): Observable<admin.auth.DecodedIdToken> {
    return Observable.fromPromise(admin.auth().verifyIdToken(token));
  }

  public makeUser (user): Observable<any> {
    return this.userRepository.makeUser(user)
    .map(result => {
      return { id: result };
    });
  }
}

export interface IUsersService {
  getUser (id: number): Observable<IUser>;
  getCurrentUser (token: string): Observable<IUser>;
  verifyUser (token: string, id: number): Observable<boolean>;
  makeUser (user: IUser): Observable<any>;
}

export default new UsersService (
  UserRepository
);
