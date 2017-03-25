import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import * as Knex from 'knex';
import dbConfig, { DEVICE_TABLE, USERS_TABLE, USERS_DEVICES_TABLE, SENSORS_TABLE, ACTUATORS_TABLE } from './../db.config';

import { IDevice } from '../../interfaces/IDevice';
import { IUser } from '../../interfaces/IUser';
import { ISensor } from '../../interfaces/ISensor';
import { IActuator } from '../../interfaces/IActuator';

const _knex = Knex(dbConfig[process.env.NODE_ENV || 'development']);

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

  public getDevicesSensors(deviceId: number): Observable<ISensor[]> {
    return Observable.fromPromise(<any>this.knex(SENSORS_TABLE).where({device_id: deviceId}));
  }

  public getDevicesActuators(deviceId: number): Observable<IActuator[]> {
    return Observable.fromPromise(<any>this.knex(ACTUATORS_TABLE).where({device_id: deviceId}));
  }

  public makeDevice(device: IDevice): Observable<number> {
    return Observable.fromPromise(<any>this.knex(DEVICE_TABLE).returning('id').insert(device));
  }
}

export interface IDeviceRepository {
  getDevice (id: number): Observable<IDevice>;
  getDevicesUsers (deviceId: number): Observable<IUser[]>;
  getDevicesSensors (deviceId: number): Observable<ISensor[]>;
  getDevicesActuators (deviceId: number): Observable<IActuator[]>;
  makeDevice (device: IDevice): Observable<number>;
}

export default new DeviceRepository (_knex);
