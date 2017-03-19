import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import * as Knex from 'knex';
import dbConfig from './db.config';

import { IDevice } from '../interfaces/IDevice';

const _knex = Knex(dbConfig[process.env.NODE_ENV || 'development']);
const DEVICE_TABLE = 'devices';

export class DeviceRepository implements IDeviceRepository {
  constructor (
    private knex: Knex
  ) {
  }

  public getDevice(id: number): Observable<IDevice> {
    return Observable.fromPromise(<any>this.knex(DEVICE_TABLE).where({ id }))
    .map(device => {
      return device[0];
    });
  }

  public makeDevice(device: IDevice): Observable<number> {
    return Observable.fromPromise(<any>this.knex(DEVICE_TABLE).returning('id').insert(device));
  }
}

export interface IDeviceRepository {
  getDevice (id: number): Observable<IDevice>;
  makeDevice (device: IDevice): Observable<number>;
}

export default new DeviceRepository (_knex);
