import { Observable } from 'rxjs/Observable';
import * as assert from 'assert';
import * as sinon from 'sinon';

// interfaces:
import { IUser } from '../../interfaces/IUser';
import { IDevice } from '../../interfaces/IDevice';
import { UsersService, IUsersService } from './users.service';
import { IUserRepository } from '../../repositories/user/users.repository';
import { IDeviceService } from '../device/devices.service';

// Mocks:
import UserRepositoryMock from '../../repositories/user/users.repositoryMock';
import DeviceServiceMock from '../device/device.serviceMock';

describe('user.service', () => {
  let userRepository: IUserRepository;

  let makeDeviceUnderTest = () => {
    return new UsersService(userRepository);
  };
  beforeEach(() => {
    userRepository = new UserRepositoryMock();
  });

  describe('getUser', () => {
    it('should return an observable of a user with devices', (done) => {
      // Arrange
      let dummyUser: IUser = <IUser>{
        id: 2,
        name: 'dummy',
        devices: null
      };
      let dummyDevices: Array<IDevice> = [{
        id: 1,
        name: 'dummy device name 1',
        description: 'dummy device description 1'
      },
      {
        id: 1,
        name: 'dummy device name 1',
        description: 'dummy device description 1'
      }];

      let expectedUser = Object.assign({}, dummyUser);
      expectedUser.devices = dummyDevices;

      let classUnderTest = makeDeviceUnderTest();

      sinon.stub(userRepository, 'getUser').returns(Observable.from([dummyUser]));
      sinon.stub(userRepository, 'getUsersDevices').returns(Observable.from([dummyDevices]));

      // Act
      let result = classUnderTest.getUser(1);

      // Assert
      result.subscribe(user => {
        assert.deepEqual(user, dummyUser, 'result = expectedUser');
        done();
      });
    });
  });
});
