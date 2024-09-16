import { expect, test } from "bun:test";
import { StandardDeviation } from "./standard-deviation";

test("standard deviation", () => {
  expect(StandardDeviation([2, 4, 4, 4, 5, 5, 7, 9])).toBeCloseTo(2.14);
});

test("standard deviation - no variance", () => {
  expect(StandardDeviation([10, 10, 10])).toBeCloseTo(0);
});

test("standard deviation - small variance", () => {
  expect(StandardDeviation([10, 12, 10])).toBeCloseTo(1.15);
});

test("standard deviation - huge variance", () => {
  expect(StandardDeviation([10, 1000, 10, 2, 3, 4, 56, 7])).toBeCloseTo(
    349.357,
  );
});
