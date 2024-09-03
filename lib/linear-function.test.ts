import { expect, test, describe } from "bun:test";
import {
  LinearMapLinearFunction,
  PolymonialLinearFunction,
} from "./linear-function";
import { Vector2D } from "@lib/vector-2d";

describe("PolymonialLinearFunction", () => {
  test("positive gradient -> slope = 0.5; intercept = 2; x = 10", () => {
    const positiveGradientFunction = PolymonialLinearFunction.create()
      .slope(0.5)
      .intercept(2);

    expect(positiveGradientFunction.generate(10)).toBe(7);
  });

  test("negative gradient -> slope = -1; intercept = 5; x = 10", () => {
    const negativeGradientFunction = PolymonialLinearFunction.create()
      .slope(-1)
      .intercept(5);
    expect(negativeGradientFunction.generate(10)).toBe(-5);
  });
});

describe("LinearMapLinearFunction", () => {
  test("should invert the vector components", () => {
    const linearMapFunction = LinearMapLinearFunction.create()
      .xTransformer((x, y) => y)
      .yTransformer((x, y) => x);

    const result = linearMapFunction.generate(Vector2D.create([13, 23]));
    expect(result).toEqual(Vector2D.create([23, 13]));
  });

  test("should invert the sign of each component", () => {
    const linearMapFunction = LinearMapLinearFunction.create()
      .xTransformer((x, y) => -x)
      .yTransformer((x, y) => -y);

    const result = linearMapFunction.generate(Vector2D.create([-100, 233]));
    expect(result).toEqual(Vector2D.create([100, -233]));
  });
});
