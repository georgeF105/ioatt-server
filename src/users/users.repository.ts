import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import * as Knex from 'knex';
import * as knexConfig from '../../knexfile';

import { IUser } from './IUser';

const knex = Knex(knexConfig[process.env.NODE_ENV || 'development']);
const USERS_TABLE = 'users';

export class UserRepository implements IUserRepository {

  public getUser(id: number): Observable<IUser> {
    return Observable.fromPromise(knex(USERS_TABLE).where({ id }))
    .map(user => {
      return user[0];
    });
  }
}

export interface IUserRepository {
  getUser (id: number): Observable<IUser>;
}

export default new UserRepository ();
