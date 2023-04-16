import Joi from "joi";

export const exampleSchema = {
	getExampleData: Joi.object({
		id: Joi.number().required(),
		name: Joi.string().required(),
	}),
};
