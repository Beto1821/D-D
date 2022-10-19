import Battle from './Battle';
import Monster from '../Monster';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  private _player: Fighter;
  private _environment: Monster[] | SimpleFighter[] | Fighter[];

  constructor(
    player: Fighter,
    environment: Monster[] | SimpleFighter[] | Fighter[],
  ) {
    super(player);
    this._player = player;
    this._environment = environment;
  }

  fight(): number {
    this._environment.every((e) => {
      if (this._player.lifePoints > 0 && e.lifePoints > 0) {
        this._player.attack(e);
        e.attack(this._player);
      }
      return this._player.lifePoints >= 0;
    });
    return super.fight();
  }
}
