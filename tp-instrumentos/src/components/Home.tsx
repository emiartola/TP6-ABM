import React from "react";
import { Navigation } from "./Navigation";
import { Productos } from "./Productos";

export const Home = () => {
  return (

    <>
      <Navigation></Navigation>
      <div className="container" >

        <div className="col-md-8">
          <br></br>
          <br></br>
          <h5>
            "Musical Hendrix es una tienda de instrumentos musicales con ya más de 15
            años de experiencia. Tenemos el conocimiento y la capacidad como para
            informarte acerca de las mejores elecciones para tu compra musical."
          </h5>
        </div>
      </div>
      
    </>
  );
};