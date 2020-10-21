import * as Base from "./Base";

export class Health implements Base.HealthInterface {
  currentHealth: number = 0;
  minimumHealth: number = 0;
  maximumHealth: number = 0;

  add(value: number): void {
    this.currentHealth += value;
    if (this.currentHealth > this.maximumHealth) {
      this.currentHealth = this.maximumHealth;
    }
  }

  remove(value: number): void {
    this.currentHealth -= value;
    if (this.currentHealth < this.minimumHealth) {
      this.currentHealth = this.minimumHealth;
    }
  }

  topOff(): void {
    this.currentHealth = this.maximumHealth;
  }

  getCurrent(): number {
    return this.currentHealth;
  }

  setCurrent(value: number): void {
    this.currentHealth = value;
  }

  getMaximum(): number {
    return this.maximumHealth;
  }

  setMaximum(value: number): void {
    this.maximumHealth = value;
  }
  isAlive(): boolean {
    return this.currentHealth > 0;
  }
  isConscious(): boolean {
    return this.currentHealth > 0;
  }

  constructor(maximumHealth: number = 10) {
    this.currentHealth = maximumHealth;
    this.maximumHealth = maximumHealth;
  }
}
