// 1
import { Request, Response } from "express";
import { LoginBody } from "../types/user.types";

export const loginUser = (req: Request<{}, {}, LoginBody>, res: Response): void => {
  const { email, password } = req.body ?? {};

  if (!email || !password) {
    res.status(400).json({ message: "Email and password are required" });
    return;
  }

  res.status(200).json({ message: `User ${email} logged in successfully!` });
};
