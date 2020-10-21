import * as Base from "./Base";

export type InabilityName = "CONHEALTH" | "SHIELD" | "";
export class Inability extends Base.Qual<string> {}
export class InabilityManager extends Base.QualManager<string> {}

export const InabilitiesByOrigin = new Base.QuantManager<InabilityManager>([
  { id: "Ghost", value: new InabilityManager(["SHIELD", "CONHEALTH"]) },
  { id: "Human", value: new InabilityManager([]) },
]);
