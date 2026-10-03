// 1
import { Response } from "express";
import { GoodbyeRequest } from "../types/goodbye.types";

export const sayGoodbye = (req: GoodbyeRequest, res: Response): void => {
  const { name } = req.query;

  // 3
  if (!name || typeof name !== "string") {
    res.status(400).json({ error: "Query param 'name' is required and must be a string" });
    return;
  }

  res.json({ farewell: `Goodbye, ${name}` });
};
