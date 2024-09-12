import { expect, test } from "bun:test";
import { CorrelationCoefficient } from "./correlation-coefficient";
import { Vector2D } from "./vector-2d";

test("correlation coefficient - perfect positive linear relationship", () => {
  // y = 2x
  const data = [
    Vector2D.create([1, 2]),
    Vector2D.create([2, 4]),
    Vector2D.create([3, 6]),
    Vector2D.create([4, 8]),
    Vector2D.create([5, 10]),
  ];
  expect(CorrelationCoefficient(data)).toBeCloseTo(1.005);
});

test("correlation coefficient - perfect negative linear relationship", () => {
  // y = -2x
  const data = [
    Vector2D.create([1, -2]),
    Vector2D.create([2, -4]),
    Vector2D.create([3, -6]),
    Vector2D.create([4, -8]),
    Vector2D.create([5, -10]),
  ];
  expect(CorrelationCoefficient(data)).toBeCloseTo(-1.005);
});
