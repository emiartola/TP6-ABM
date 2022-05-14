"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateInstrumento = exports.addInstrumento = exports.getInstrumentoBySearch = exports.deleteInstrumentoById = exports.getInstrumentoById = exports.getAllInstrumentos = void 0;
const dbmysql_1 = require("../dbmysql");
const getAllInstrumentos = (request, response) => {
    new Promise((resolve, reject) => {
        dbmysql_1.bd.getConnection((err, connection) => {
            if (err) {
                console.error(err);
                response.send(err);
                return;
            }
            console.log("bd MySql: ", connection.threadId);
            connection.query("SELECT * FROM instrumento", (err, resultado) => {
                if (err) {
                    console.error(err);
                    response.send(err);
                }
                // console.log(resultado);
                response.send(resultado);
                connection.release();
            });
        });
    });
};
exports.getAllInstrumentos = getAllInstrumentos;
const getInstrumentoById = (request, response) => {
    new Promise((resolve, reject) => {
        const id = parseInt(request.params.id);
        dbmysql_1.bd.getConnection((err, connection) => {
            if (err) {
                console.error(err);
                response.send(err);
                return;
            }
            console.log("bd MySql: ", connection.threadId);
            console.log("id: ", id);
            connection.query("SELECT * FROM instrumento WHERE id = ?", [id], (err, resultado) => {
                if (err) {
                    console.error(err);
                    response.send(err);
                }
                console.log(resultado);
                response.send(resultado[0]);
                connection.release();
            });
        });
    });
};
exports.getInstrumentoById = getInstrumentoById;
const deleteInstrumentoById = (request, response) => {
    new Promise((resolve, reject) => {
        const id = parseInt(request.params.id);
        dbmysql_1.bd.getConnection((err, connection) => {
            if (err) {
                console.error(err);
                response.send(err);
                return;
            }
            console.log("bd MySql: ", connection.threadId);
            console.log("id: ", id);
            connection.query("DELETE FROM instrumento WHERE id = ?", [id], (err, resultado) => {
                if (err) {
                    console.error(err);
                    response.send(err);
                }
                // console.log(resultado);
                response.send(resultado);
                connection.release();
            });
        });
    });
};
exports.deleteInstrumentoById = deleteInstrumentoById;
const getInstrumentoBySearch = (request, response) => {
    new Promise((resolve, reject) => {
        const termino = request.params.termino;
        dbmysql_1.bd.getConnection((err, connection) => {
            if (err) {
                console.error(err);
                response.send(err);
                return;
            }
            console.log("bd MySql: ", connection.threadId);
            console.log("termino: ", termino);
            connection.query("SELECT * from instrumento WHERE nombre LIKE '%" + termino + "%'", [termino], (err, resultado) => {
                if (err) {
                    console.error(err);
                    response.send(err);
                }
                // console.log(resultado);
                response.send(resultado);
                connection.release();
            });
        });
    });
};
exports.getInstrumentoBySearch = getInstrumentoBySearch;
const addInstrumento = (request, response) => {
    new Promise((resolve, reject) => {
        dbmysql_1.bd.getConnection((err, connection) => {
            if (err) {
                console.error(err);
                response.send(err);
                return;
            }
            console.log("bd MySql: ", connection.threadId);
            connection.query("INSERT INTO instrumento(nombre, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion) VALUES (?, ?, ?, ?,?, ?, ?, ?)", [request.body.nombre,
                request.body.marca,
                request.body.modelo,
                request.body.imagen,
                request.body.precio,
                request.body.costoEnvio,
                request.body.cantidadVendida,
                request.body.descripcion], (err, resultado) => {
                if (err) {
                    console.error(err);
                    response.send(err);
                }
                response.send(resultado);
                connection.release();
            });
        });
    });
};
exports.addInstrumento = addInstrumento;
const updateInstrumento = (request, response) => {
    new Promise((resolve, reject) => {
        const id = parseInt(request.body.id);
        dbmysql_1.bd.getConnection((err, connection) => {
            if (err) {
                console.error(err);
                response.send(err);
                return;
            }
            console.log("bd MySql: ", connection.threadId);
            console.log("id: ", id);
            connection.query("UPDATE instrumento SET nombre = ?, marca  = ?, modelo = ?, imagen = ?, precio = ?, costoEnvio = ?, cantidadVendida = ? , descripcion = ? WHERE id = ?", [request.body.nombre,
                request.body.marca,
                request.body.modelo,
                request.body.imagen,
                request.body.precio,
                request.body.costoEnvio,
                request.body.cantidadVendida,
                request.body.descripcion,
                request.body.id,
            ], (err, resultado) => {
                if (err) {
                    console.error(err);
                    response.send(err);
                }
                console.log(resultado);
                response.send(resultado);
                connection.release();
            });
        });
    });
};
exports.updateInstrumento = updateInstrumento;
