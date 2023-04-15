import { Router } from "express";
import { getExample, getExampleData } from "../controllers/exampleControllers";
const router = Router();

router.get("/", getExample);
router.post("/", getExampleData);

export default router;
