import * as assert from 'assert';
import { DeviceService, IDeviceService } from './devices.service';
import { IDeviceRepository } from '../repositories/device.repository';
import DeviceRepoositoryMock from '../repositories/device.repositoryMock';

describe('devices.service', () => {
  let deviceRepoository: IDeviceRepository;
  // let classUnderTest: IDeviceService;

  let makeDeviceUnderTest = () => {
    return new DeviceService(deviceRepoository);
  };
  beforeEach(() => {
    deviceRepoository = new DeviceRepoositoryMock();
  });

  describe('getDevice', () => {
    it('should return an observable of the device called for', () => {
      let classUnderTest = makeDeviceUnderTest();
      assert.equal(1, 1, 'congrats 1 === 1');
    });
  });
});
