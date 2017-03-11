import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import * as Knex from 'knex';
import dbConfig from './db.config';

const knex = Knex(dbConfig[process.env.NODE_ENV || 'development']);
const USER_DEVICE_TABLE = 'join_user-device';

export class UserDeviceRepository implements IUserDeviceRepository {

  public getUserJoins(userId: number): Observable<any[]> {
    return Observable.fromPromise(<any>knex(USER_DEVICE_TABLE).where({ user_id: userId }));
  }

  public getDeviceJoins(deviceId: number) {
    return Observable.fromPromise(<any>knex(USER_DEVICE_TABLE).where({ device_id: deviceId }));
  }
}

export interface IUserDeviceRepository {
  getUserJoins (userId: number): Observable<any[]>;
  getDeviceJoins (deviceId: number): Observable<any[]>;
}

export default new UserDeviceRepository ();
