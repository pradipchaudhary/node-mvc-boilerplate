"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const app = (0, express_1.default)();
const port = 8000;
// root directory
app.get("/", (req, res) => {
    res.json({
        message: "Hello world!",
    });
});
// Middleware
app.use(() => {
    throw (0, http_errors_1.default)(404, "Route not found !!");
});
const errorHandler = (err, req, res, next) => {
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
