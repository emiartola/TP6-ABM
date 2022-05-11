"use strict";
// import Instrumento from "./entidades/instrumento";
// export async function getInstrumentos(){
//     const fetch = require('node-fetch');
//     const response = await fetch('http://localhost:8080/instrumentos');
//     const data = await response.json();
//     let list:Instrumento[] = [];
//     try {
//         let instrumentos = JSON.parse(JSON.stringify(data));
//         //console.log(instrumentos);
//         instrumentos.map( (emp:Instrumento) => {
//             let {id, nombre, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion } = emp;
//             let instrumento = {id, nombre, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion};
//             list.push(instrumento);
//         });
//         //console.log(list);
//         return list;
//     } catch (error) {
//         return console.log(error)
//     }
// }   
// export async function getInstrumentoXId(instrumento:Instrumento){
//     const fetch = require('node-fetch');
//     const response = await fetch(`http://localhost:8080/instrumentos/${instrumento.id}`);
//     const data = await response.json();
//     let list:Instrumento[] = [];
//     try {
//         let instrumentos = JSON.parse(JSON.stringify(data));
//         //console.log(instrumentos);
//         instrumentos.map( (emp:Instrumento) => {
//             let {id, nombre, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion} = emp;
//             let instrumento ={id, nombre, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion};
//             list.push(instrumento);
//         });
//         //console.log(list);
//         return list;
//     } catch (error) {
//         return console.log(error)
//     }
// }  
