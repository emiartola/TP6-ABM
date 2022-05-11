"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rutas_1 = __importDefault(require("./rutas"));
const app = (0, express_1.default)();
require('./dbmysql');
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(rutas_1.default);
app.listen(8080, () => console.log("Servidor en puerto 8080", 8080));
