"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const exampleRoutes_1 = __importDefault(require("./routes/exampleRoutes"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const app = (0, express_1.default)();
const port = 8000;
// Route directory
app.use("/", exampleRoutes_1.default);
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
// Connect to MongoDB
mongoose_1.default
    .connect(config_1.DB)
    .then(() => {
    console.log("connect to MongoDB");
    app.listen(port, () => {
        console.log(`Server listening on Port ${port}`);
    });
})
    .catch(() => {
    throw (0, http_errors_1.default)(505, "Unable to connect to MongoDB");
});
