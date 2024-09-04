import { expect, test } from "bun:test";
import { EstimatePrice } from "./estimate-price";

test("estimate price 0 0 0", () => {
  const mileage = 0;
  const result = EstimatePrice(mileage, 0, 0);
  expect(result).toBe(0);
});

test("estimate price 15 0 0", () => {
  const mileage = 15;
  const result = EstimatePrice(mileage, 0, 0);
  expect(result).toBe(0);
});

test("estimate price 2 2 44", () => {
  const mileage = 2;
  const result = EstimatePrice(mileage, 2, 44);
  expect(result).toBe(90);
});
