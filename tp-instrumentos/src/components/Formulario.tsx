import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getInstrumentoXId, saveInstrumento } from "./FuncionesApi";
import Instrumento from "./Instrumento";
import { Navigation } from "./Navigation";

export const Formulario = () => {

    const navigate = useNavigate();

    const {id} = useParams();
    const [instrumento, setInstrumento] = useState<Instrumento>(new Instrumento());
    
   
    const getInstrumento = async () => {
        if(Number(id) !== 0){
            let instrumentoSelect:Instrumento = await getInstrumentoXId(Number(id));
            setInstrumento(instrumentoSelect);
        }else{
            let instrumentoSelect:Instrumento = new Instrumento();
            setInstrumento(instrumentoSelect);
        }
    }

    useEffect(() => {
        getInstrumento();
    }, []);

    const save = async () => {
        console.log(instrumento.nombre);
        await saveInstrumento(instrumento);
        navigate('/Grilla'); 
      }
    
    return (
        <>
        <Navigation/>
        <div className="center">
        <Form className="form-control">
            <Form.Group className="mb-3" controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="Text" placeholder="Ingrese el nombre" defaultValue={instrumento?.nombre} onChange={e => instrumento.nombre = String(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMarca">
                <Form.Label>Marca</Form.Label>
                <Form.Control type="Text" placeholder="Ingrese la marca" defaultValue={instrumento?.marca} onChange={e => instrumento.marca = String(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formModelo">
                <Form.Label>Modelo</Form.Label>
                <Form.Control type="Text" placeholder="Ingrese el modelo" defaultValue={instrumento?.modelo} onChange={e => instrumento.modelo = String(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrecio">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="Text" placeholder="Ingrese el precio" defaultValue={instrumento?.precio} onChange={e => instrumento.precio = Number(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCostoEnvio">
                <Form.Label>Costo de Envío</Form.Label>
                <Form.Control type="Text" placeholder="Ingrese el costo de envío" defaultValue={instrumento?.costoEnvio} onChange={e => instrumento.costoEnvio = String(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCantidadVendida">
                <Form.Label>Cantidad vendida</Form.Label>
                <Form.Control type="Text" placeholder="Ingrese la cantidad vendida" defaultValue={instrumento?.cantidadVendida} onChange={e => instrumento.cantidadVendida = Number(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescripcion">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="Text" placeholder="Ingrese la descripción del instrumento" defaultValue={instrumento?.descripcion} onChange={e => instrumento.descripcion = String(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImagen">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="Text" placeholder="Ingrese el path de la imagen" defaultValue={instrumento?.imagen} onChange={e => instrumento.imagen = String(e.target.value)}/>
            </Form.Group>
            <br/>
            <br/><br/>
            <Button onClick={save}  variant="primary" type="button">
                Guardar
            </Button>
        </Form>
        </div>
        </>
    )
}