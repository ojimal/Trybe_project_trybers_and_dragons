import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
  }
  
  static createdArchetypeInstances(): number {
    Warrior._createdInstances += 1;
    return Warrior._createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}