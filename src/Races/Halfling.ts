import Race from './Race';

export default class Halfling extends Race {
  private _maxlifePoints: number;
  static racesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxlifePoints = 60;
    Halfling.racesInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxlifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling.racesInstances;
  }
}