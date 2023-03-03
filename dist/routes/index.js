"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const users_1 = __importDefault(require("./users"));
const Home = (req, res) => {
    console.log(req.hostname);
    res.send("Hello World");
};
const NotFound = (req, res) => {
    console.log(req.hostname);
    res.sendStatus(404);
};
exports.routes = {
    Home,
    NotFound,
    user: users_1.default,
};
//# sourceMappingURL=index.js.map