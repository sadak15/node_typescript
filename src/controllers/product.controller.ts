import { Request, Response } from "express";
import { ProductParams, ProductQuery, UpdateProductBody } from "../types/product.types";

//2
export const getProducts = (req: Request<{}, {}, {}, ProductQuery>, res: Response): void => {
  const { page = "1", limit = "10" } = req.query;

  res.send(`Page ${page} with ${limit} items`);
};

// 3
export const updateProduct = (
  req: Request<ProductParams, {}, UpdateProductBody>,
  res: Response
): void => {
  const { id } = req.params;
  const { name, price } = req.body ?? {};

  if (!name || typeof price !== "number") {
    res.status(400).json({ message: "Body must include name (string) and price (number)" });
    return;
  }

  res.json({ message: `Updated product ${id}`, id, name, price });
};
