import * as SW from "./SimpleWorld";
import * as Base from "./Base";

export const WalkingSpeedByOrigin = new Base.QuantManager<number>([
  { id: "Ghost", value: 40 },
  { id: "Human", value: 30 },
]);
