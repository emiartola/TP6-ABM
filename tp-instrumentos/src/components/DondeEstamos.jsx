import React from "react";
import { Navigation } from "./Navigation";


export const DondeEstamos = () => {
  return (
    <>
    <Navigation/>
    <div className="container">
      <br></br>
      <h4>Vení a visitarnos, estamos en Av. Las Heras y Av. San Martin, Ciudad de Mendoza</h4> 
      <br></br>
      <iframe
        title="mapadegoogle"
        style={{ border: 0, width: "100%", height: "350px" }}
        src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.4482396835056!2d-68.84046638533515!3d-32.88631517616564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e091ed2dd83f7%3A0xf41c7ab7e3522157!2sAv.%20San%20Mart%C3%ADn%20%26%20Av.%20Las%20Heras%2C%20Capital%2C%20Mendoza!5e0!3m2!1ses-419!2sar!4v1650658428153!5m2!1ses-419!2sar"}
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>
    </div>
    </>
  );
};