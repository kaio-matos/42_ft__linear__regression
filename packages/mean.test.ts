import { expect, test } from "bun:test";
import { Mean } from "./mean";

test("mean", () => {
  expect(Mean([10, 4, 4])).toBe(6);
});

test("mean", () => {
  expect(Mean([10, 10, 10])).toBe(10);
});
