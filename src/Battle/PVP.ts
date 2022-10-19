import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  private Character1: Fighter;
  private Character2: Fighter;

  constructor(Character1: Fighter, Character2: Fighter) {
    super(Character1);
    this.Character1 = Character1;
    this.Character2 = Character2;
  }

  fight(): number {
    if (this.Character1.lifePoints > 0 && this.Character2.lifePoints > 0) {
      this.Character1.attack(this.Character2);
      this.Character2.attack(this.Character1);
    }
    return super.fight();
  }
}