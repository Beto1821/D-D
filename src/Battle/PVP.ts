import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  private Player1: Fighter;
  private Player2: Fighter;

  constructor(Player1: Fighter, Player2: Fighter) {
    super(Player1);
    this.Player1 = Player1;
    this.Player2 = Player2;
  }

  fight(): number {
    if (this.Player1.lifePoints > 0 && this.Player2.lifePoints > 0) {
      this.Player1.attack(this.Player2);
      this.Player2.attack(this.Player1);
    }
    return super.fight();
  }
}