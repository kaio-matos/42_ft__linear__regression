import { Mean } from "./mean";
import { Summation } from "./summation";

/**
 * The standard deviation is the average amount of variability in your dataset
 *
 * It tells you, on average, how far each value lies from the mean
 */
export function StandardDeviation(list: number[]) {
  const mean = Mean(list);

  const diffsSquared = list.map((x) => {
    const difference = x - mean;
    const diffSquared = Math.pow(difference, 2);
    return diffSquared;
  });

  const diffsSquaredSum = Summation(diffsSquared);

  const n = list.length;

  const variance = diffsSquaredSum / (n - 1);

  const standardDeviation = Math.sqrt(variance);

  return standardDeviation;
}
