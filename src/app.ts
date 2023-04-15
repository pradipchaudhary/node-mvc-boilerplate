import express from "express";
const app = express();
const port = 8000;

// root directory
app.get("/", (req, res) => {
	res.send("Hello, world!");
});

// Listen
app.listen(port, () => {
	console.log(`Server listening on Port ${port}`);
});
