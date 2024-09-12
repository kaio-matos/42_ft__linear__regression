import { z } from "zod";

export const CarPriceDataset = z.object({
  km: z.string().transform((arg) => Number(arg)),
  price: z.string().transform((arg) => Number(arg)),
});
