import { expect, test } from "bun:test";
import { Vector2D } from "./vector-2d";

test("2D vector addition", () => {
  const v1 = Vector2D.create();
  v1.push(10, 10);

  const v2 = Vector2D.create();
  v2.push(10, 10);

  const result = v1.add(v2);
  expect(result[0]).toBe(20);
  expect(result[1]).toBe(20);
});

test("2D vector subtraction", () => {
  const v1 = Vector2D.create();
  v1.push(10, 10);

  const v2 = Vector2D.create();
  v2.push(10, 10);

  const result = v1.sub(v2);
  expect(result[0]).toBe(0);
  expect(result[1]).toBe(0);
});
