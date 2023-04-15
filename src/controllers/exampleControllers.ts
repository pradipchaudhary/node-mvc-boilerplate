import { RequestHandler } from "express";

export const getExample: RequestHandler = (req, res, next) => {
	res.json({
		message: "example controller !",
	});
};

export const getExampleData: RequestHandler = (req, res, next) => {
	const { id, name }: { id: number; name: string } = req.body;

	res.json({ id, name });
};
