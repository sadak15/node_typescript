// 1
import { Router } from "express";
import { sayGoodbye } from "../controllers/goodbye.controller";

const router = Router();

router.get("/goodbye", sayGoodbye);

export default router;
