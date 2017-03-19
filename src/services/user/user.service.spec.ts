import { Observable } from 'rxjs/Observable';
import * as assert from 'assert';
import * as sinon from 'sinon';

// interfaces:
import { IUser } from '../../interfaces/IUser';
import { UsersService, IUsersService } from './users.service';
import { IUserRepository } from '../../repositories/user/users.repository';
import { IDeviceService } from '../device/devices.service';
import { IUserDeviceService } from '../user-device/user-device.service';

// Mocks:
import UserRepositoryMock from '../../repositories/user/users.repositoryMock';
import DeviceServiceMock from '../device/device.serviceMock';
import userDeviceServiceMock from '../user-device/user-device.serviceMock';

describe('devices.service', () => {
  let userRepository: IUserRepository;
  let deviceService: IDeviceService;
  let userDeviceService: IUserDeviceService;

  let makeDeviceUnderTest = () => {
    return new UsersService(userRepository, deviceService, userDeviceService);
  };
  beforeEach(() => {
    userRepository = new UserRepositoryMock();
    deviceService = new DeviceServiceMock();
    userDeviceService = new userDeviceServiceMock();
  });

  describe('getDevice', () => {
    it('should return an observable of the device called for', (done) => {
      let dummyUser = {
        id: 2,
        name: 'dummy'
      };
      let dummyDeviceIds = [2, 3, 5];
      let dummyDevices;
      let classUnderTest = makeDeviceUnderTest();

    });
  });
});
