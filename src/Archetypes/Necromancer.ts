import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    Necromancer._createdInstances += 1;
    return Necromancer._createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}