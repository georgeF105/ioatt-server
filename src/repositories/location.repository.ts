import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import * as Knex from 'knex';
import dbConfig from './db.config';

import { ILocation } from '../locations/ILocation';

const _knex = Knex(dbConfig[process.env.NODE_ENV || 'development']);
const LOCATION_TABLE = 'locations';

export class LocationRepository implements ILocationRepository {
  constructor (
    private knex: Knex
  ) {
  }

  public getLocation(id: number): Observable<ILocation> {
    return Observable.fromPromise(<any>this.knex(LOCATION_TABLE).where({ id }))
    .map(location => {
      return location[0];
    });
  }

  public makeLocation(location: ILocation): Observable<number> {
    return Observable.fromPromise(<any>this.knex(LOCATION_TABLE).returning('id').insert(location));
  }
}

export interface ILocationRepository {
  getLocation (id: number): Observable<ILocation>;
  makeLocation (location: ILocation): Observable<number>;
}

export default new LocationRepository (_knex);
