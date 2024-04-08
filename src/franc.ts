export class Franc {
  private amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number) {
    // this.amount *= multiplier;
    return new Franc(this.amount * multiplier);
  }

  equals(object: Franc): boolean {
    const franc = object;
    return this.amount === franc.amount;
  }
}
