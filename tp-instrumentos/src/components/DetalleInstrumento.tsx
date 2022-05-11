import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getInstrumentoXId } from "./FuncionesApi";
import Instrumento from "./Instrumento";
import { Navigation } from './Navigation';


export const DetalleInstrumento = () => {

    const { id } = useParams();
    const [instrumento, setInstrumento] = useState<Instrumento>();

     const getInstrumento = async () => {
        let datos: Instrumento = await getInstrumentoXId(Number(id));
        console.log(datos);
        if (datos !== null) {
            setInstrumento(datos);
        }
        
    }

    useEffect(() => {
        getInstrumento();
    }, []);

    return (
        <>
            <Navigation/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <img
                            style={{ maxWidth: "400px", maxHeight: "400px" }}
                            src={`../images/${instrumento?.imagen}`}
                            alt="instrumento"
                            className="minAltoImg"
                        />
                        <p>Descripción :</p>
                        <p>{instrumento?.descripcion}</p>
                    </div>
                    <div className="col-lg-4 mt-3">
                        <p>{instrumento?.cantidadVendida} Vendidos</p>
                        <h2>{instrumento?.instrumento}</h2>
                        <h2 className="mt-5">${instrumento?.precio}</h2>
                        <h5>Marca : {instrumento?.marca}</h5>
                        <h5>Modelo : {instrumento?.modelo}</h5>

                        Costo Envío:
                        {instrumento?.costoEnvio === "G" ? (
                            <h5 style={{ color: "green" }}>
                                Envío gratis
                            </h5>
                        ) : (
                            <h5 style={{ color: "orange" }}>
                                ${instrumento?.costoEnvio}
                            </h5>
                        )}
                        <Button href="/instrumentos" className="btn btn-primary mt-5">
                            Volver
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};