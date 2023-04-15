import express from "express";
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
	throw createHttpError(404, "Route not found!!");
});

// Server Created for port listening
app.listen(port, () => {
	console.log(`Server listening on Port ${port}`);
});
