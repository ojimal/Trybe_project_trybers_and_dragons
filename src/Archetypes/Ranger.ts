import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    Ranger._createdInstances += 1;
    return Ranger._createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}