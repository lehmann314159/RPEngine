import { Interface } from "readline";

export interface HealthInterface {
  isAlive(): boolean;
  isConscious(): boolean;
}

export interface ItemInterface {
  getDescription(): string;
  getWeight(): number;
  getBuyCost(): number;
  getSellCost(): number;
  isFungible(): boolean;
  isAvailable(): boolean;
}

export class Qual<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }
}

export class QualManager<T> {
  private list: Array<T> = [];

  add(value: T): void {
    this.remove(value);
    this.list.push(value);
  }

  addList(value: Array<T>): void {
    value.forEach((item) => this.add(item));
  }

  getList(): Array<T> {
    return this.list;
  }

  remove(value: T): void {
    this.list = this.list.filter((item) => item != value);
  }

  has(value: T): boolean {
    return this.list.filter((item) => item == value).length > 0;
  }

  constructor(items: Array<T>) {
    items.forEach((item) => {
      this.add(item);
    });
  }
}

export class Quant<T> {
  id: string;
  value: T;

  constructor(id: string, value: T) {
    this.id = id;
    this.value = value;
  }
}

export class QuantManager<T> {
  // I'd love to constrain id to Statname rather than string
  private list: { [id: string]: T } = {};

  constructor(items: Array<Quant<T>>) {
    items.forEach((item) => {
      this.add(item.id, item.value);
    });
  }

  add(label: string, value: T): void {
    this.list[label] = value;
  }

  get(label: string): T {
    return this.list[label];
  }

  remove(label: string): void {
    delete this.list[label];
  }

  has(label: string): boolean {
    return typeof this.list[label] != "undefined";
  }
}

export const greaterOf = (a: number, b: number) => {
  return a > b ? a : b;
};

export const lesserOf = (a: number, b: number) => {
  return a < b ? a : b;
};

export const d = (size: number) => {
  return Math.floor(Math.random() * size) + 1;
};

export const roll = (size: number, effect: string = "standard") => {
  switch (effect) {
    case "standard":
      return d(size);
    case "advantage":
      return greaterOf(d(size), d(size));
    case "disadvantage":
      return lesserOf(d(size), d(size));
  }
};
