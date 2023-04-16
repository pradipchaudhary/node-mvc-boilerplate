import express, { ErrorRequestHandler } from "express";
import createHttpError from "http-errors";
import exampleRoute from "./routes/exampleRoutes";
import mongoose from "mongoose";
import { DB, PORT } from "./config";
import { getExampleData } from "./controllers/exampleControllers";
import { errorHandler } from "./middleware/errorHandler";
const app = express();
app.use(express.json());
// Route directory
app.use("/", exampleRoute);

// Middleware
app.use(() => {
	throw createHttpError(404, "Route not found !!");
});

app.use(errorHandler);

// Connect to MongoDB
mongoose
	.connect(DB)
	.then(() => {
		console.log("Connect to MongoDB");
		app.listen(PORT, () => {
			console.log(`Server listening on PORT ${PORT}`);
		});
	})
	.catch(() => {
		throw createHttpError(505, "Unable to connect to MongoDB");
	});
