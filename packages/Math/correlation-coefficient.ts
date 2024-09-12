import { Mean } from "./mean";
import { StandardDeviation } from "./standard-deviation";
import { Summation } from "./summation";
import type { Vector2D } from "./vector-2d";

function normalize(
  point: number,
  mean: number,
  standardDeviation: number,
): number {
  return (point - mean) / standardDeviation;
}

/**
 * The correlation coefficient measures the linear relationship between two variables
 */
export function CorrelationCoefficient(list: Vector2D[]) {
  const n = list.length;
  const xMean = Mean(list.map(([x, y]) => x));
  const yMean = Mean(list.map(([x, y]) => y));

  const xStandardDeviation = StandardDeviation(list.map(([x, y]) => x));
  const yStandardDeviation = StandardDeviation(list.map(([x, y]) => y));

  const normalizedList = list.map(([x, y]) => {
    const normalizedX = normalize(x, xMean, xStandardDeviation);
    const normalizedY = normalize(y, yMean, yStandardDeviation);
    return normalizedX * normalizedY;
  });

  const normalizedSum = Summation(normalizedList);

  return (1 / (n - 1)) * normalizedSum;
}
