import * as Base from "./Base";
import * as SWB from "./SimpleWorldBasics";
import * as SWH from "./SimpleWorldHealth";
import * as SWI from "./SimpleWorldInability";
import * as SWP from "./SimpleWorldProficiency";
import * as SWR from "./SimpleWorldResistance";
import * as SWW from "./SimpleWorldWeapon";

export class Action {
  name: string = "";
  type: string = "";
  range: number = 60;
  isTransitive: boolean = true;
}

export type ArchetypeName = "Caster" | "Smasher" | "Sneaker" | "";
export type LuckyPlanetName = "Mars" | "Venus" | "Jupiter" | "Moon" | "";
export type OriginName = "Ghost" | "Human" | "";

export class ActionManager extends Base.QuantManager<Action> {}

export type TraitName =
  | "Constitution"
  | "Dexterity"
  | "Intelligence"
  | "Strength";
export class TraitManager extends Base.QuantManager<number> {}

export class Armor {}

export class Character {
  actions: ActionManager = new ActionManager([]);
  age: number = 26;
  archetype: ArchetypeName = "";
  bio: string = "";
  gender: string = "not relevant";
  health: SWH.Health = new SWH.Health();
  luckyPlanet: LuckyPlanetName = "";
  origin: OriginName = "";
  walkingSpeed: number = 0;

  inabilities: SWI.InabilityManager = new SWI.InabilityManager([]);
  proficiencies: SWP.ProficiencyManager = new SWP.ProficiencyManager([]);
  resistances: SWR.ResistanceManager = new SWR.ResistanceManager([]);
  traits: TraitManager = new TraitManager([]);
  weapons: SWW.WeaponManager = new SWW.WeaponManager([]);

  getTraitBonus(traitName: TraitName): number {
    return this.traits.get(traitName) > 9 ? this.traits.get(traitName) - 10 : 0;
  }

  getTraitValue(traitName: TraitName): number {
    return this.traits.get(traitName);
  }
  setTraitValue(traitName: TraitName, value: number): void {
    this.traits.add(traitName, value);
  }

  applyLuckyPlanet(): void {
    switch (this.luckyPlanet) {
      case "Mars":
        this.setTraitValue("Strength", this.getTraitValue("Strength") + 2);
        break;
      case "Venus":
        this.setTraitValue(
          "Intelligence",
          this.getTraitValue("Intelligence") + 2
        );
        break;
      case "Jupiter":
        this.setTraitValue(
          "Constitution",
          this.getTraitValue("Constitution") + 2
        );
        break;
      case "Moon":
        this.setTraitValue("Dexterity", this.getTraitValue("Dexterity") + 2);
        break;
    }
  }

  applyHealthBonus(): void {
    // Only humans get the con bonus to health
    if (!this.inabilities.has("CONHEALTH")) {
      this.health.setMaximum(
        this.health.getMaximum() + this.getTraitBonus("Constitution")
      );
    }
  }

  applyInabilities(): void {
    this.inabilities.addList(
      SWI.InabilitiesByOrigin.get(this.origin).getList()
    );
  }

  applyProficiencies(): void {
    this.proficiencies.addList(
      SWP.ProficienciesByArchetype.get(this.archetype).getList()
    );
    this.proficiencies.addList(
      SWP.ProficienciesByOrigin.get(this.origin).getList()
    );
  }

  applyResistances(): void {
    this.resistances.addList(
      SWR.ResistancesByOrigin.get(this.origin).getList()
    );
  }

  setWalkingSpeed(): void {
    this.walkingSpeed = SWB.WalkingSpeedByOrigin.get(this.origin);
  }
}
