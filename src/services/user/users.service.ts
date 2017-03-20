import { Observable } from 'rxjs/Observable';

import UserRepository, { IUserRepository } from '../../repositories/user/users.repository';
import UserDeviceService, { IUserDeviceService } from '../user-device/user-device.service';
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

  public makeUser (user): Observable<any> {
    return this.userRepository.makeUser(user)
    .map(result => {
      return { id: result };
    });
  }
}

export interface IUsersService {
  getUser (id: number): Observable<IUser>;
  makeUser (user: IUser): Observable<any>;
}

export default new UsersService (
  UserRepository
);
