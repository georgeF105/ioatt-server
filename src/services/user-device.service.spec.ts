import { Observable } from 'rxjs/Observable';
import * as assert from 'assert';
import * as sinon from 'sinon';

import { IDevice } from '../interfaces/IDevice';
import { UserDeviceService, IUserDeviceService } from './user-device.service';
import { IUserDeviceRepository } from '../repositories/user-device.repository';
import UserDeviceRepositoryMock from '../repositories/user-device.repositoryMock';

describe('user-device.service', () => {
  let userDeviceRepository: IUserDeviceRepository;

  let makeClassUnderTest = () => {
    return new UserDeviceService(userDeviceRepository);
  };
  beforeEach(() => {
    userDeviceRepository = new UserDeviceRepositoryMock();
  });

  describe('getUsersDeviceIds', () => {
    it('should return an observable with an array of a users device ids', (done) => {
      let classUnderTest = makeClassUnderTest();
      let dummyUserDeviceJoins: any = [{
        id: 1,
        user_id: 1,
        device_id: 1
      },
      {
        id: 2,
        user_id: 1,
        device_id: 3
      },
      {
        id: 3,
        user_id: 1,
        device_id: 5
      }];
      let expected = [1, 3, 5];

      sinon.stub(userDeviceRepository, 'getUserJoins').returns(Observable.from([dummyUserDeviceJoins]));

      let result = classUnderTest.getUsersDeviceIds(1);

      result.subscribe((deviceIds) => {
        console.log('deviceIds', deviceIds);
        assert.deepEqual(deviceIds, expected, 'device is expected');
        done();
      });
    });
  });
});
