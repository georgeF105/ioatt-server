import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import * as Knex from 'knex';
import dbConfig from './db.config';

import { IUser } from '../users/IUser';

const knex = Knex(dbConfig[process.env.NODE_ENV || 'development']);
const USERS_TABLE = 'users';

export class UserRepository implements IUserRepository {

  public getUser(id: number): Observable<IUser> {
    return Observable.fromPromise(<any>knex(USERS_TABLE).where({ id }))
    .map(user => {
      return user[0];
    });
  }

  public makeUser(user: IUser): Observable<number> {
    return Observable.fromPromise(<any>knex(USERS_TABLE).returning('id').insert(user));
  }
}

export interface IUserRepository {
  getUser (id: number): Observable<IUser>;
  makeUser (user: IUser): Observable<number>;
}

export default new UserRepository ();
