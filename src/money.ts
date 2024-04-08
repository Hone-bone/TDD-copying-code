export class Money {
  protected amount: number;

  equals(object: Object): boolean {
    const money = object as Money;
    return this.amount === money.amount;
  }
}
