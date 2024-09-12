import { CorrelationCoefficient, Vector2D } from "@packages/Math";

import { CarPriceDataset } from "./car-price-mileage";
import { readDataset } from "@scripts/helper";

const data = await readDataset("data.csv", CarPriceDataset);

const datapoints = data.map((point) =>
  Vector2D.create([point.km, point.price]),
);

const result = CorrelationCoefficient(datapoints);

console.log(
  "\n--------------------------------------------------------------------------------------------------------------------",
);
console.log("Correlation Coeffiecient for the Car Price-Mileage dataset");
console.log(
  "--------------------------------------------------------------------------------------------------------------------",
);
console.log(
  "The correlation coefficient always takes a value between -1 and 1, with 1 or -1 indicating perfect correlation",
);
console.log("Coefficient = " + result);
console.log(
  "--------------------------------------------------------------------------------------------------------------------",
);
