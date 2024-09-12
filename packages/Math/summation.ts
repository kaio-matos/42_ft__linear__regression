/**
 * Math Summation - ∑
 */
export function Summation(list: number[], modifier = (n: number) => n): number {
  return list.reduce((prev, current) => prev + modifier(current), 0);
}
