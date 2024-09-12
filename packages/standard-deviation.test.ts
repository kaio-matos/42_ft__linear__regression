import { expect, test } from "bun:test";
import { StandardDeviation } from "./standard-deviation";

test("standard deviation", () => {
  expect(StandardDeviation([2, 4, 4, 4, 5, 5, 7, 9])).toBeCloseTo(2.14);
});
