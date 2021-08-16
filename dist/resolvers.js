"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./db"));
const resolvers = {
    Query: {
        page: (root, { id }) => {
            return db_1.default.page.findUnique({
                where: { id: id },
            });
        },
    },
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map