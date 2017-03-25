import { Observable } from 'rxjs/Observable';
import * as assert from 'assert';
import * as sinon from 'sinon';

import { IDevice } from '../../interfaces/IDevice';
import { ISensor } from '../../interfaces/ISensor';
import { IActuator } from '../../interfaces/IActuator';
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
        description: 'a device sensor'
      };

      let dummySensors: Array<ISensor> = [
        {
          id: 1,
          name: 'dummy sensor 1',
          device_id: 1,
          type: 'just a dummy sensor',
          value: '16deg'
        },
        {
          id: 2,
          name: 'dummy sensor 2',
          device_id: 1,
          type: 'just a dummy sensor',
          value: '21deg'
        }
      ];

      let dummyActuators: Array<IActuator> = [
        {
          id: 1,
          name: 'dummy actuator 1',
          device_id: 1,
          type: 'just a dummy actuator',
          value: 'on'
        },
        {
          id: 2,
          name: 'dummy actuator 2',
          device_id: 1,
          type: 'just a dummy actuator',
          value: 'off'
        }
      ];

      let expectedDevice = Object.assign({}, dummyDevice);
      expectedDevice.sensors = dummySensors;
      expectedDevice.actuators = dummyActuators;

      sinon.stub(deviceRepoository, 'getDevice').returns(Observable.from([dummyDevice]));
      sinon.stub(deviceRepoository, 'getDevicesSensors').returns(Observable.from([dummySensors]));
      sinon.stub(deviceRepoository, 'getDevicesActuators').returns(Observable.from([dummyActuators]));

      let result = classUnderTest.getDevice(1);

      result.subscribe((device) => {
        assert.deepEqual(device, expectedDevice, 'device is expected');
        done();
      });
    });
  });
});
