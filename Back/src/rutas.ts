import { Router } from "express";
import { getAllInstrumentos, getInstrumentoById } from "./controladores/instrumentoController";

const ruta = Router();

//ruta.get('/test', (requ, resp) => resp.send('HOLA MUNDO'));


ruta.get('/instrumentos', getAllInstrumentos);
ruta.get('/instrumentos/:id', getInstrumentoById);
// ruta.post('/insertar', crearInstrumento);
// ruta.put('/actualizar/:id', updateInstrumento);
// ruta.delete('/eliminar/:id', eliminarInstrumento);

export default ruta;

