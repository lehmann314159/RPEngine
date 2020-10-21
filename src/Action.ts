export interface ActionInterface {
  name: string;
  type: string;
  range: number;
  isTransitive: boolean;
  //onSuccess(): void;
  //onFailure(): void;
}
