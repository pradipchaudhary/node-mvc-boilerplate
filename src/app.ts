import express, { ErrorRequestHandler } from "express";
import createHttpError from "http-errors";
import exampleRoute from "./routes/exampleRoutes";
import mongoose from "mongoose";
import { DB } from "./config";
const app = express();
const port = 8000;

// Route directory
app.use("/", exampleRoute);
// Middleware
app.use(() => {
	throw createHttpError(404, "Route not found !!");
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
	console.log(err.message, err.statusCode);
	if (res.headersSent) {
		return next(err);
	}
	res
		.status(err.statusCode || 500)
		.json({ message: err.message || "An Unknown Error !" });
};

app.use(errorHandler);

// Server Created for port listening

// Connect to MongoDB

mongoose
	.connect(DB)
	.then(() => {
		console.log("connect to MongoDB");
		app.listen(port, () => {
			console.log(`Server listening on Port ${port}`);
		});
	})
	.catch(() => {
		throw createHttpError(505, "Unable to connect to MongoDB");
	});
