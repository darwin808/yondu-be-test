"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewares = void 0;
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const defaultMiddleware = (app) => {
    app.use((0, cookie_parser_1.default)());
    app.use(express_1.default.json());
    app.use((0, cors_1.default)({
        credentials: true,
        origin: "*",
    }));
    app.use((0, helmet_1.default)());
};
exports.middlewares = {
    defaultMiddleware,
};
//# sourceMappingURL=index.js.map