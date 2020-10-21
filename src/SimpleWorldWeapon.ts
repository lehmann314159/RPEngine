import * as Base from "./Base";

export type WeaponType = {
  // Item state
  description: string;
  weight: number;
  buyCost: number;
  sellCost: number;
  fungible: boolean;
  inventory: number;

  // Intrinsic state
  name: string;
  weaponType: string;
  relevantTrait: string;
  damageType: string;
  damageAmount: Array<string>;
  attackBonus: string;
};

export class Weapon implements Base.ItemInterface {
  data: WeaponType;

  constructor(data: WeaponType) {
    this.data = data;
  }

  getDescription(): string {
    return this.data.description;
  }

  getWeight(): number {
    return this.data.weight;
  }

  getBuyCost(): number {
    return this.data.buyCost;
  }

  getSellCost(): number {
    return this.data.sellCost;
  }

  isFungible(): boolean {
    return this.data.fungible;
  }

  isAvailable(): boolean {
    return this.data.inventory > 0;
  }
}

export class WeaponManager extends Base.QuantManager<Weapon> {}

export const StartingWeaponsByArchetype = new Base.QuantManager<Array<Weapon>>([
  {
    id: "Sneaker",
    value: [
      new Weapon({
        name: "main-hand dagger",
        description: "This is a main-hand dagger",
        weaponType: "MELEE",
        weight: 1.0,
        relevantTrait: "Dexterity",
        damageType: "Slashing",
        damageAmount: ["d4"],
        attackBonus: "0",
        buyCost: 30,
        sellCost: 15,
        fungible: false,
        inventory: 1,
      }),
      new Weapon({
        name: "off-hand dagger",
        description: "This is an off-hand dagger",
        weaponType: "MELEE",
        weight: 1.0,
        relevantTrait: "Dexterity",
        damageType: "Slashing",
        damageAmount: ["d4"],
        attackBonus: "0",
        buyCost: 30,
        sellCost: 15,
        fungible: false,
        inventory: 1,
      }),
    ],
  },
]);
