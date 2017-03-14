import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import * as Knex from 'knex';
import dbConfig from './db.config';

import { ISensor } from '../sensors/ISensor';

const _knex = Knex(dbConfig[process.env.NODE_ENV || 'development']);
const SENSOR_TABLE = 'sensors';

export class SensorRepository implements ISensorRepository {
  constructor (
    private knex: Knex
  ) {
  }

  public getSensor(id: number): Observable<ISensor> {
    return Observable.fromPromise(<any>this.knex(SENSOR_TABLE).where({ id }))
    .map(sensor => {
      return sensor[0];
    });
  }

  public makeSensor(sensor: ISensor): Observable<number> {
    return Observable.fromPromise(<any>this.knex(SENSOR_TABLE).returning('id').insert(sensor));
  }
}

export interface ISensorRepository {
  getSensor (id: number): Observable<ISensor>;
  makeSensor (sensor: ISensor): Observable<number>;
}

export default new SensorRepository (_knex);
