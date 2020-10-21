import * as Base from "./Base";

export type MaterialType = "CLOTH" | "LEATHER" | "MAIL" | "PLATE";

export type ArmorType = {
  name: string;
  description: string;
  material: MaterialType;
};

export class Armor {
  data: ArmorType;

  constructor(data: ArmorType) {
    this.data = data;
  }
}
