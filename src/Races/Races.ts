export default abstract class Race {
  private name: string
  private dexterity: number
 
  constructor(name: string, dexterity: number) {
    this.name = name
    this.dexterity = 0
  }

  static createdRacesInstances(value: number): void{
   throw new Error("Not implemented")
  }

  public abstract maxLifePoints(): number

}