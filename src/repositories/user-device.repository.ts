import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import * as Knex from 'knex';
import * as knexConfig from '../../knexfile';

const knex = Knex(knexConfig[process.env.NODE_ENV || 'development']);
const USER_DEVICE_TABLE = 'join_user-device';

export class UserDeviceRepository implements IUserDeviceRepository {

  public getUsersDeviceIds(userId: number): Observable<number[]> {
    return Observable.fromPromise(knex(USER_DEVICE_TABLE).where({ user_id: userId }))
    .map((joins: Array<{}>) => {
      return joins.map(join => join.device_id);
    });
  }
}

export interface IUserDeviceRepository {
  getUsersDeviceIds (userId: number): Observable<number[]>;
}

export default new UserDeviceRepository ();
