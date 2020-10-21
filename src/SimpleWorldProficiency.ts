import * as Base from "./Base";

export type ProficiencyName =
  | "MELEE"
  | "OFFHAND"
  | "SHIELD"
  | "SPELLS"
  | "THROWN"
  | "UNFETTERED"
  | "";
export class Proficiency extends Base.Qual<string> {}
export class ProficiencyManager extends Base.QualManager<string> {}

export const ProficienciesByArchetype = new Base.QuantManager<
  ProficiencyManager
>([
  {
    id: "Caster",
    value: new ProficiencyManager(["SPELLS"]),
  },
  {
    id: "Smasher",
    value: new ProficiencyManager(["MELEE", "SHIELD"]),
  },
  {
    id: "Sneaker",
    value: new ProficiencyManager(["MELEE", "OFFHAND", "THROWN"]),
  },
]);

export const ProficienciesByOrigin = new Base.QuantManager<ProficiencyManager>([
  { id: "Ghost", value: new ProficiencyManager(["UNFETTERED"]) },
  { id: "Human", value: new ProficiencyManager([]) },
]);
