"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExampleData = exports.getExample = void 0;
const getExample = (req, res, next) => {
    res.json({
        message: "example controller !",
    });
};
exports.getExample = getExample;
const getExampleData = (req, res, next) => {
    const { id, name } = req.body;
    res.json({ id, name });
};
exports.getExampleData = getExampleData;
