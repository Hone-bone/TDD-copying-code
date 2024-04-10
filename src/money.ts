import { Dollar } from "./dollar";
import { Franc } from "./franc";

export abstract class Money {
  protected amount: number;

  abstract times(multiplier: number): Money;

  equals(object: Object): boolean {
    const money = object as Money;
    return (
      this.amount === money.amount && this.constructor === money.constructor
    );
  }

  static dollar(amount: number): Money {
    return new Dollar(amount);
  }

  static franc(amount: number): Money {
    return new Franc(amount);
  }
}
