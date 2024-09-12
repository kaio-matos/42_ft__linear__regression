import { Mean } from "./mean";
import { Summation } from "./summation";

/**
 * The standard deviation is the average amount of variability in your dataset
 *
 * It tells you, on average, how far each value lies from the mean
 */
export function StandardDeviation(list: number[]) {
  const meansSquared = list.map((x) => {
    const mean = x - Mean(list);
    const meanSquared = Math.pow(mean, 2);
    return meanSquared;
  });

  const meansSquaredSum = Summation(meansSquared);

  const n = list.length;

  const variance = meansSquaredSum / (n - 1);

  const standardDeviation = Math.sqrt(variance);

  return standardDeviation;
}
