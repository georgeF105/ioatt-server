import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import * as Knex from 'knex';
import dbConfig, { USERS_TABLE, DEVICE_TABLE, USERS_DEVICES_TABLE } from './../db.config';

import { IUser } from '../../interfaces/IUser';
import { IDevice } from '../../interfaces/IDevice';

const knex = Knex(dbConfig[process.env.NODE_ENV || 'development']);

export class UserRepository implements IUserRepository {

  public getUser(id: number): Observable<IUser> {
    return Observable.fromPromise(<any>knex(USERS_TABLE).where({ id }))
    .map(user => {
      return user[0];
    });
  }

  public getUserFromUid(uid: string): Observable<IUser> {
    return Observable.fromPromise(<any>knex(USERS_TABLE).where({ uid }))
    .map(user => {
      return user[0];
    });
  }

  public getUsersDevices(userId: number): Observable<IDevice[]> {
    return Observable.fromPromise(<any>knex(USERS_DEVICES_TABLE).where({user_id: userId}).innerJoin(DEVICE_TABLE, `${USERS_DEVICES_TABLE}.user_id`, `${DEVICE_TABLE}.id`) )
    .map(devices => {
      return devices;
    });
  }

  public makeUser(user: IUser): Observable<number> {
    return Observable.fromPromise(<any>knex(USERS_TABLE).returning('id').insert(user));
  }
}

export interface IUserRepository {
  getUser (id: number): Observable<IUser>;
  getUserFromUid(uid: string): Observable<IUser>;
  getUsersDevices(userId: number): Observable<IDevice[]>;
  makeUser (user: IUser): Observable<number>;
}

export default new UserRepository ();
