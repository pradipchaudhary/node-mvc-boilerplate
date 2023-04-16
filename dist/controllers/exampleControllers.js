"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExampleData = exports.getExample = void 0;
const Example_1 = __importDefault(require("../model/Example"));
const http_errors_1 = __importDefault(require("http-errors"));
const getExample = (req, res, next) => {
    res.json({
        message: "example controller !",
    });
};
exports.getExample = getExample;
const getExampleData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name } = req.body;
    try {
        const example = yield Example_1.default.findOne({ name });
        if (example)
            return next((0, http_errors_1.default)(406, "example already exists"));
        const newExample = new Example_1.default({ id, name });
        yield newExample.save();
        res.json({ id, name });
    }
    catch (err) {
        return next(http_errors_1.default.InternalServerError);
    }
});
exports.getExampleData = getExampleData;
