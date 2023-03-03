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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoute = (0, express_1.Router)();
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
userRoute.get("/users", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prisma.user.findMany();
        return res.send({ message: "Success", users });
    }
    catch (error) {
        return res.send({ error });
    }
}));
userRoute.get("/user/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield prisma.user.findUnique({
            where: {
                id: Number(id),
            },
        });
        return res.send({ message: "Success", user });
    }
    catch (error) {
        return res.send({ error });
    }
}));
userRoute.post("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { first_name, last_name, address, postcode, phone_number, email, username, password, active, } = req.body;
    try {
        const users = yield prisma.user.create({
            data: {
                first_name,
                last_name,
                address,
                postcode,
                phone_number,
                email,
                username,
                password,
                active,
            },
        });
        return res.send({ message: "Success", users });
    }
    catch (error) {
        return res.send({ error });
    }
}));
userRoute.delete("/user/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield prisma.user.delete({
            where: {
                id: Number(id),
            },
        });
        return res.send({ message: "Success", user });
    }
    catch (error) {
        return res.send({ error });
    }
}));
userRoute.delete("/deluser/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma.user.deleteMany({});
        return res.send({ message: "Success", user });
    }
    catch (error) {
        return res.send({ error });
    }
}));
userRoute.patch("/user/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { active } = req.query;
    const { id } = req.params;
    try {
        const user = yield prisma.user.update({
            where: {
                id: Number(id),
            },
            data: {
                active: JSON.parse(active === null || active === void 0 ? void 0 : active.toLowerCase()),
            },
        });
        return res.send({ message: "Success", user });
    }
    catch (error) {
        return res.send({ error });
    }
}));
exports.default = userRoute;
//# sourceMappingURL=users.js.map