import { ISensor } from './ISensor';
import { IActuator } from './IActuator';

export interface IDevice {
  id: number;
  name: string;
  description: string;
  sensors?: Array<ISensor>;
  actuators?: Array<IActuator>;
}
