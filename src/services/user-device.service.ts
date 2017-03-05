import { Observable } from 'rxjs/Observable';

import UserDeviceRepository, { IUserDeviceRepository } from '../repositories/user-device.repository';

export class UserDeviceService implements IUserDeviceService {
  constructor (
    private userDeviceRepository: IUserDeviceRepository
  ) {}

  public getUsersDeviceIds (id: number): Observable<number[]> {
    return this.userDeviceRepository.getUserJoins(id)
    .map(joins => {
      return joins.map(join => join.device_id);
    });
  }
}

export interface IUserDeviceService {
  getUsersDeviceIds (id: number): Observable<number[]>;
}

export default new UserDeviceService (
  UserDeviceRepository
);
