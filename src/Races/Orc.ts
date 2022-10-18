import Race from './Race';

export default class Orc extends Race {
  private _maxlifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxlifePoints = 74;
  }

  get maxLifePoints(): number {
    return this._maxlifePoints;
  }
}