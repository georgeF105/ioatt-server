import { Observable } from 'rxjs/Observable';

import UserRepository, { IUserRepository } from '../repositories/users.repository';
import UserDeviceService, { IUserDeviceService } from '../services/user-device.service';
import DeviceService, { IDeviceService } from '../services/devices.service';
import { IUser } from '../users/IUser';
import { IDevice } from '../devices/IDevice';

export class UsersService implements IUsersService {
  constructor (
    private userRepository: IUserRepository,
    private deviceService: IDeviceService,
    private userDeviceService: IUserDeviceService
  ) {}

  public getUser (id: number): Observable<IUser> {
    return this.userRepository.getUser(id)
    .flatMap(user => {
      return this.getUsersDevices(user.id)
      .map(devices => {
        user.devices = devices;
        return user;
      });
    });
  }

  private getUsersDevices (userId: number): Observable<IDevice[]> {
    return this.userDeviceService.getUsersDeviceIds(userId)
    .flatMap(ids => {
      return Observable.forkJoin(
        ids.map(id => this.deviceService.getDevice(id))
      );
    });
  }
}

export interface IUsersService {
  getUser (id: number): Observable<IUser>;
}

export default new UsersService (
  UserRepository,
  DeviceService,
  UserDeviceService
);
