import { Dollar } from "./dollar";
import { Franc } from "./franc";

export abstract class Money {
  protected amount: number;
  protected _currency: string;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this._currency = currency;
  }
  abstract times(multiplier: number): Money;

  currency(): string {
    return this._currency;
  }

  equals(object: Object): boolean {
    const money = object as Money;
    return (
      this.amount === money.amount && this.constructor === money.constructor
    );
  }

  static dollar(amount: number): Money {
    return new Dollar(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Franc(amount, "CHF");
  }
}
