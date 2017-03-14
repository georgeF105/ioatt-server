import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import * as Knex from 'knex';
import dbConfig from './db.config';

import { IActuator } from '../actuators/IActuator';

const _knex = Knex(dbConfig[process.env.NODE_ENV || 'development']);
const ACTUATOR_TABLE = 'actuators';

export class ActuatorRepository implements IActuatorRepository {
  constructor (
    private knex: Knex
  ) {
  }

  public getActuator(id: number): Observable<IActuator> {
    return Observable.fromPromise(<any>this.knex(ACTUATOR_TABLE).where({ id }))
    .map(actuator => {
      return actuator[0];
    });
  }

  public makeActuator(actuator: IActuator): Observable<number> {
    return Observable.fromPromise(<any>this.knex(ACTUATOR_TABLE).returning('id').insert(actuator));
  }
}

export interface IActuatorRepository {
  getActuator (id: number): Observable<IActuator>;
  makeActuator (actuator: IActuator): Observable<number>;
}

export default new ActuatorRepository (_knex);
