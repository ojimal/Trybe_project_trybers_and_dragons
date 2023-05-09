import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    Mage._createdInstances += 1;
    return Mage._createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}