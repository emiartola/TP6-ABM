import { useEffect, useState } from 'react';
import { Button} from 'react-bootstrap';
import { deleteInstrumentoXId, getInstrumentosJSON } from './FuncionesApi';
import { Navigation } from './Navigation';
import Instrumento from './Instrumento';


export const GrillaInstrumentos = () => {

  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);

  const getInstrumentos = async () => {
    let datos: Instrumento[] = await getInstrumentosJSON();
    setInstrumentos(datos);
  }

  useEffect(() => {
    getInstrumentos();
  }, []);

  const deleteInstrumento = async (idInstrumento:number) => {
    await deleteInstrumentoXId(idInstrumento);
    window.location.reload();
  }

  return (
    <>
      <Navigation />
      <Button href={`/formulario/0`} variant="primary"> Nuevo </Button> 
      <br />
      <section className="bg-light p-5">
      <div>
        <table className="table bg-white">
          <thead className="bg-dark text-light">
            <tr>
              <th>Id</th>
              <th>Nombre </th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Precio</th>
              <th>Costo de envío</th>
              <th>Cantidad vendida </th>
              <th>Descripción </th>
              <th>Imagen</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {instrumentos !== null ? (
              instrumentos.map((instrumento: Instrumento) => {
                return (
                  <tr key={instrumento.id}>
                    <td data-title="Id"> {instrumento.id}</td>
                    <td data-title="Nombre"> {instrumento?.nombre} </td>
                    <td data-title="Marca"> {instrumento.marca} </td>
                    <td data-title="Modelo"> {instrumento.modelo} </td>
                    <td data-title="Precio"> {instrumento.precio} </td>
                    <td data-title="Costo de envío"> {instrumento.costoEnvio} </td>
                    <td data-title="Cantidad vendida"> {instrumento.cantidadVendida} </td>
                    <td data-title="Descripción"> {instrumento.descripcion} </td>
                    <td data-title="Imagen"> {instrumento.imagen} </td>
                    <td data-title="Imagen"> <Button variant="outline-warning" href={`/formulario/` + instrumento.id}>Modificar</Button> </td>
                    <td data-title="Imagen"> <Button variant="outline-danger" onClick={(e) => deleteInstrumento(instrumento.id)}>Eliminar</Button></td>
                  </tr>
                );
              })
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </div>
      </section>
    </>
  );
};
