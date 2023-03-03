"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const middlewares_1 = require("./middlewares");
const msg = () => {
    const PORT = process.env.PORT || 3000;
    console.log(`✅✅✅  App Running in Port: ${PORT} 🚀🚀🚀 💯`);
};
const main = () => {
    const app = (0, express_1.default)();
    const port = process.env.PORT || 3000;
    app.listen(port, msg);
    middlewares_1.middlewares.defaultMiddleware(app);
    app.get("/", routes_1.routes.Home);
    app.use("/api", routes_1.routes.user);
    app.get("*", routes_1.routes.NotFound);
};
exports.main = main;
(0, exports.main)();
//# sourceMappingURL=index.js.map