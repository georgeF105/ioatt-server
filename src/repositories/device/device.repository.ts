import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import * as Knex from 'knex';
import dbConfig from './../db.config';

import { IDevice } from '../../interfaces/IDevice';
import { IUser } from '../../interfaces/IUser';

const _knex = Knex(dbConfig[process.env.NODE_ENV || 'development']);
const DEVICE_TABLE = 'devices';
const USERS_TABLE = 'users';
const USERS_DEVICES_TABLE = 'join_user-device';

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

  public getDevicesUsers(deviceId: number): Observable<IUser[]> {
    return Observable.fromPromise(<any>this.knex(USERS_DEVICES_TABLE).where({user_id: deviceId}).innerJoin(USERS_TABLE, `${USERS_DEVICES_TABLE}.device_id`, `${USERS_TABLE}.id`) );
  }

  public makeDevice(device: IDevice): Observable<number> {
    return Observable.fromPromise(<any>this.knex(DEVICE_TABLE).returning('id').insert(device));
  }
}

export interface IDeviceRepository {
  getDevice (id: number): Observable<IDevice>;
  getDevicesUsers (deviceId: number): Observable<IUser[]>;
  makeDevice (device: IDevice): Observable<number>;
}

export default new DeviceRepository (_knex);
