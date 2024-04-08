import { Dollar } from "../src/dollar";
import { Franc } from "../src/franc";

test("testMultiplication", () => {
  const five = new Dollar(5);
  expect(five.times(2)).toEqual(new Dollar(10));
  expect(five.times(3)).toEqual(new Dollar(15));
});

test("testEquality", () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
  expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
});

test("testFrancMultiplication", () => {
  const five = new Franc(5);
  expect(five.times(2)).toEqual(new Franc(10));
  expect(five.times(3)).toEqual(new Franc(15));
});