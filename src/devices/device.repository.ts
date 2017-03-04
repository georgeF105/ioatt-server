import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { IDevice } from './IDevice';

export class DeviceRepository implements IDeviceRepository {
  public getDevice(id: number): Observable<IDevice> {
    return Observable.from([{
      id,
      name: `dummy device ${id}`,
      description: 'returned with rxjs'
    }]);
  }
}

export interface IDeviceRepository {
  getDevice (id: number): Observable<IDevice>;
}

export default new DeviceRepository ();
