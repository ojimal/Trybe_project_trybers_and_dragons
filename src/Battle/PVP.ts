import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _hero: Fighter;
  private _opponent: Fighter;

  constructor(hero: Fighter, opponent: Fighter) {
    super(hero);
    this._hero = hero;
    this._opponent = opponent;
    super.fight();
  }

  fight(): number {
    while (this._hero.lifePoints > 0 && this._opponent.lifePoints > 0) {
      this._hero.attack(this._opponent);
      this._opponent.attack(this._hero);
    }
  
    if (this._hero.lifePoints <= 0) {
      return -1; // Hero lost
    } 
    return 1; // Hero won
  }
}
