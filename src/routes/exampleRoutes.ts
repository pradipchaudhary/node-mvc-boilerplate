import { Router } from "express";
import { getExample } from "../controllers/exampleControllers";
const router = Router();

router.get("/", getExample);

export default router;
