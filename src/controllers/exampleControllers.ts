import { RequestHandler } from "express";
import Example from "../model/Example";
import createHttpError from "http-errors";

export const getExample: RequestHandler = (req, res, next) => {
	res.json({
		message: "example controller !",
	});
};

export const getExampleData: RequestHandler = async (req, res, next) => {
	const { id, name }: IExampleData = req.body;

	try {
		const example = await Example.findOne({ name });

		if (example) return next(createHttpError(406, "example already exists"));
		const newExample = new Example({ id, name });
		await newExample.save();

		res.json({ id, name });
	} catch (err) {
		return next(createHttpError.InternalServerError);
	}
};
