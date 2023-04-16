import { RequestHandler } from "express";
import { exampleSchema } from "./exampleSchema";
import validator from "../utils/validator";

export const getExampleDataValidation: RequestHandler = (req, res, next) => {
	validator(exampleSchema.getExampleData, req.body, next);
};
