import * as Base from "./Base";

export type ResistanceName =
  | "Bludgeoning"
  | "Piercing"
  | "Slashing"
  | "Spell"
  | "";
export class Resistance extends Base.Qual<string> {}
export class ResistanceManager extends Base.QualManager<string> {}

export const ResistancesByOrigin = new Base.QuantManager<ResistanceManager>([
  {
    id: "Ghost",
    value: new ResistanceManager(["Bludgeoning", "Piercing", "Slashing"]),
  },
  { id: "Human", value: new ResistanceManager(["spell"]) },
]);
