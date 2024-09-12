import { expect, test } from "bun:test";
import { Summation } from "./summation";

test("∑", () => {
  expect(Summation([10, 3, 4])).toBe(17);
});

test("∑ 3xi", () => {
  expect(Summation([10, 3, 4], (n) => 3 * n)).toBe(51);
});

test("∑ i^2", () => {
  expect(Summation([10, 3, 4], (n) => Math.pow(n, 2))).toBe(125);
});
