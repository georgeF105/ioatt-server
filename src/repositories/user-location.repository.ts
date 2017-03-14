import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import * as Knex from 'knex';
import dbConfig from './db.config';

const knex = Knex(dbConfig[process.env.NODE_ENV || 'development']);
const USER_LOCATION_TABLE = 'join_user-location';

export class UserLocationRepository implements IUserLocationRepository {

  public getUserJoins(userId: number): Observable<any[]> {
    return Observable.fromPromise(<any>knex(USER_LOCATION_TABLE).where({ user_id: userId }));
  }

  public getLocationJoins(locationId: number) {
    return Observable.fromPromise(<any>knex(USER_LOCATION_TABLE).where({ location_id: locationId }));
  }
}

export interface IUserLocationRepository {
  getUserJoins (userId: number): Observable<any[]>;
  getLocationJoins (locationId: number): Observable<any[]>;
}

export default new UserLocationRepository ();
