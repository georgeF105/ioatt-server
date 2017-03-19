import { Observable } from 'rxjs/Observable';
import * as assert from 'assert';
import * as sinon from 'sinon';

import { IDevice } from '../../interfaces/IDevice';
import { DeviceService, IDeviceService } from './devices.service';
import { IDeviceRepository } from '../../repositories/device/device.repository';
import DeviceRepoositoryMock from '../../repositories/device/device.repositoryMock';

describe('devices.service', () => {
  let deviceRepoository: IDeviceRepository;

  let makeDeviceUnderTest = () => {
    return new DeviceService(deviceRepoository);
  };
  beforeEach(() => {
    deviceRepoository = new DeviceRepoositoryMock();
  });

  describe('getDevice', () => {
    it('should return an observable of the device called for', (done) => {
      let classUnderTest = makeDeviceUnderTest();
      let dummyDevice: IDevice = {
        id: 1,
        name: 'dummyDeviceName',
        description: 'a device dummy'
      };
      sinon.stub(deviceRepoository, 'getDevice').returns(Observable.from([dummyDevice]));

      let result = classUnderTest.getDevice(1);

      result.subscribe((device) => {
        assert.equal(device, dummyDevice, 'device is expected');
        done();
      });
    });
  });
});
