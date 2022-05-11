import { Button } from 'react-bootstrap';

type InstrumentoParams = {
    id: number;
    instrumento: string;
    marca: string;
    modelo: string;
    imagen: string;
    precio: number;
    costoEnvio: string;
    cantidadVendida: number;
    descripcion: string;
}

export const ItemInstrumento = (args: InstrumentoParams) => {

    return (
   
        <div className="col-mb-3 ml-3">
            <div className="card mb-3" style={{ maxWidth: "1000px" }}>
                <div className="row no-gutters">
                    <div className="col-md-3">
                        <img src={`../images/${args.imagen}`} className="card-img" alt="item" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{args.instrumento}</h3>
                            <br></br>    
                            <h2> ${args.precio}</h2>
    
                            {args.costoEnvio === "G" ? (
                                <h5 style={{ color: "green" }}>
                                    {" "}
                                    <img src="images/camion.png" alt="envioIcon" />
                                    Envío gratis a todo el país
                                </h5>
                            ) : (
                                <h5 style={{ color: "orange" }}>
                                    Costo del envío al interior de Argentina: ${args.costoEnvio}
                                </h5>
                            )}

                            <p className="card-text">{args.cantidadVendida} vendidos</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Button className="btn btn-success btn-lg btn-block" href={`/instrumentos/${args.id}`} variant="primary"> Detalle </Button>
                </div>
            </div>
        </div>
    )
}