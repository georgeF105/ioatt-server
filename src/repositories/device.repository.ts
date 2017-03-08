import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import * as Knex from 'knex';
import * as knexConfig from '../../knexfile';

import { IDevice } from '../devices/IDevice';

const _knex = Knex(knexConfig[process.env.NODE_ENV || 'development']);
const DEVICE_TABLE = 'devices';

export class DeviceRepository implements IDeviceRepository {
  constructor (
    private knex: Knex
  ) {
  }

  public getDevice(id: number): Observable<IDevice> {
    return Observable.fromPromise(this.knex(DEVICE_TABLE).where({ id }))
    .map(device => {
      return device[0];
    });
  }
}

export interface IDeviceRepository {
  getDevice (id: number): Observable<IDevice>;
}

export default new DeviceRepository (_knex);
