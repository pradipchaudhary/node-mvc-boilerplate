import express, { ErrorRequestHandler } from "express";
import createHttpError from "http-errors";
const app = express();
const port = 8000;

// root directory
app.get("/", (req, res) => {
	res.json({
		message: "Hello world!",
	});
});

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
app.listen(port, () => {
	console.log(`Server listening on Port ${port}`);
});
