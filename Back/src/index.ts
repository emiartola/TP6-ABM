import bodyParser from "body-parser";
import express from "express";
import rutas from './rutas';

const app = express();

require('./dbmysql');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(rutas);
app.listen(8080, () => console.log("Servidor en puerto 8080", 8080));

    