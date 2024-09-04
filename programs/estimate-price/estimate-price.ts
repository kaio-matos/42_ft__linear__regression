import { PolymonialLinearFunction } from "@packages/linear-function";

export function EstimatePrice(mileage: number, theta0: number, theta1: number) {
  const lf = PolymonialLinearFunction.create().slope(theta1).intercept(theta0);
  return lf.generate(mileage);
}

process.stdout.write("Mileage: ");
for await (const line of console) {
  const mileage = Number(line);
  if (Number.isNaN(mileage) || !line) {
    process.stdout.write("Invalid number...\n\n");
    process.stdout.write("Mileage: ");
    continue;
  }
  console.log("Result: " + EstimatePrice(mileage, 0, 0));
  break;
}
