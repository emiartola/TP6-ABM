import { Router } from "express";
import { addInstrumento, deleteInstrumentoById, getAllInstrumentos, getInstrumentoById, getInstrumentoBySearch, updateInstrumento } from "./controladores/instrumentoController";

const ruta = Router();

//ruta.get('/test', (requ, resp) => resp.send('HOLA MUNDO'));


ruta.get('/instrumentos', getAllInstrumentos);
ruta.get('/instrumentos/:id', getInstrumentoById);
ruta.post('/instrumentos', addInstrumento);
ruta.put('/instrumentos', updateInstrumento);
ruta.delete('/instrumentos/:id', deleteInstrumentoById);
ruta.get('/instrumentosbuscar/:termino', getInstrumentoBySearch )
export default ruta;

