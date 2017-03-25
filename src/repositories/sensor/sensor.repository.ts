import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import * as Knex from 'knex';
import dbConfig, { SENSORS_TABLE } from './../db.config';

import { ISensor } from '../../interfaces/ISensor';

const _knex = Knex(dbConfig[process.env.NODE_ENV || 'development']);

export class SensorRepository implements ISensorRepository {
  constructor (
    private knex: Knex
  ) {
  }

  public getSensor(id: number): Observable<ISensor> {
    return Observable.fromPromise(<any>this.knex(SENSORS_TABLE).where({ id }))
    .map(sensor => {
      return sensor[0];
    });
  }

  public makeSensor(sensor: ISensor): Observable<number> {
    return Observable.fromPromise(<any>this.knex(SENSORS_TABLE).returning('id').insert(sensor));
  }
}

export interface ISensorRepository {
  getSensor (id: number): Observable<ISensor>;
  makeSensor (sensor: ISensor): Observable<number>;
}

export default new SensorRepository (_knex);
