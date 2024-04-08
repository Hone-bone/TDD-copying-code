export class Dollar {
  private amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number) {
    // this.amount *= multiplier;
    return new Dollar(this.amount * multiplier);
  }

  equals(object: Dollar): boolean {
    const dollar = object;
    return this.amount === dollar.amount;
  }
}