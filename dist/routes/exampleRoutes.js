"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const exampleControllers_1 = require("../controllers/exampleControllers");
const router = (0, express_1.Router)();
router.get("/", exampleControllers_1.getExample);
exports.default = router;
