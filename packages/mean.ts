import { Summation } from "./summation";

/**
 * Calculates the average
 */
export function Mean(list: number[]) {
  const n = list.length;
  return (1 / n) * Summation(list);
}
