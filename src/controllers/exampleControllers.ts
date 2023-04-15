import { RequestHandler } from "express";

export const getExample: RequestHandler = (req, res, next) => {
	res.json({
		message: "example controller !",
	});
};

export const getExampleData: RequestHandler = (req, res, next) => {
	const { id, name }: IExampleData = req.body;

	res.json({ id, name });
};
