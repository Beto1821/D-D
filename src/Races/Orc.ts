import Race from './Race';

export default class Orc extends Race {
  private _maxlifePoints: number;
  static racesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxlifePoints = 74;
    Orc.racesInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxlifePoints;
  }

  static createdRacesInstances(): number {
    return Orc.racesInstances;
  }
}