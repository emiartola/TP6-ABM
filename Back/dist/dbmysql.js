"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bd = void 0;
const mysql_1 = require("mysql");
exports.bd = (0, mysql_1.createPool)({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'instrumentosdb',
    connectionLimit: 10
});
