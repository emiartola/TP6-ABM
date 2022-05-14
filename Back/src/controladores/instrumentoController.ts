import { Request, Response } from "express";
import { bd } from "../dbmysql";
import Instrumento from "../entidades/instrumento";

export const getAllInstrumentos = (request: Request, response: Response) => {
  new Promise((resolve, reject) => {
    bd.getConnection((err, connection) => {
      if (err) {
        console.error(err);
        response.send(err);
        return;
      }
      console.log("bd MySql: ", connection.threadId);
      connection.query("SELECT * FROM instrumento", (err, resultado) => {
        if (err) {
          console.error(err);
          response.send(err)
        }
        // console.log(resultado);
        response.send(resultado);
        
      connection.release();
      });
    });
  });
}

export const getInstrumentoById = (request: Request, response: Response) => {
  new Promise((resolve, reject) => {
    const id = parseInt(request.params.id);
    bd.getConnection((err, connection) => {
      if (err) {
        console.error(err);
        response.send(err);
        return;
      }
      console.log("bd MySql: ", connection.threadId);
      console.log("id: ", id);
      connection.query(
        "SELECT * FROM instrumento WHERE id = ?",
        [id],
        (err, resultado) => {
          if (err) {
            console.error(err);
            response.send(err)
          }
          console.log(resultado);
          response.send(resultado[0]);
          
        connection.release();
        }
      );
    });
  });
}

export const deleteInstrumentoById = (request: Request, response: Response) => {
  new Promise((resolve, reject) => {
    const id = parseInt(request.params.id);
    bd.getConnection((err, connection) => {
      if (err) {
        console.error(err);
        response.send(err);
        return;
      }
      console.log("bd MySql: ", connection.threadId);
      console.log("id: ", id);
      connection.query(
        "DELETE FROM instrumento WHERE id = ?",
        [id],
        (err, resultado) => {
          if (err) {
            console.error(err);
            response.send(err)
          }
          // console.log(resultado);
          response.send(resultado);
          
        connection.release();
        }
      );
    });
  });
}

export const getInstrumentoBySearch = (request: Request, response: Response) => {
  new Promise((resolve, reject) => {
    const termino = request.params.termino;
    bd.getConnection((err, connection) => {
      if (err) {
        console.error(err);
        response.send(err);
        return;
      }
      console.log("bd MySql: ", connection.threadId);
      console.log("termino: ", termino);
      connection.query(
        "SELECT * from instrumento WHERE nombre LIKE '%"+termino+"%'",
        [termino],
        (err, resultado) => {
          if (err) {
            console.error(err);
            response.send(err)
          }
          // console.log(resultado);
          response.send(resultado);
          
        connection.release();
        }
      );
    });
  });
}

export const addInstrumento = (request: Request, response: Response) => {
  new Promise((resolve, reject) => {
    bd.getConnection((err, connection) => {
      if (err) {
        console.error(err);
        response.send(err);
        return;
      }
      console.log("bd MySql: ", connection.threadId);
      connection.query("INSERT INTO instrumento(nombre, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion) VALUES (?, ?, ?, ?,?, ?, ?, ?)", 
      [request.body.nombre, 
      request.body.marca,
      request.body.modelo, 
      request.body.imagen, 
      request.body.precio, 
      request.body.costoEnvio, 
      request.body.cantidadVendida, 
      request.body.descripcion], 
      (err, resultado) => {
        if (err) {
          console.error(err);
          response.send(err)
        }
        response.send(resultado);
        
      connection.release();
      });
    });
  });
}


export const updateInstrumento = (request: Request, response: Response) => {
  new Promise((resolve, reject) => {
    const id = parseInt(request.body.id);
    bd.getConnection((err, connection) => {
      if (err) {
        console.error(err);
        response.send(err);
        return;
      }
      console.log("bd MySql: ", connection.threadId);
      console.log("id: ", id);
      connection.query(
        "UPDATE instrumento SET nombre = ?, marca  = ?, modelo = ?, imagen = ?, precio = ?, costoEnvio = ?, cantidadVendida = ? , descripcion = ? WHERE id = ?",
        [request.body.nombre, 
          request.body.marca,
          request.body.modelo, 
          request.body.imagen, 
          request.body.precio, 
          request.body.costoEnvio, 
          request.body.cantidadVendida, 
          request.body.descripcion,
          request.body.id,
        ], 

        (err, resultado) => {
          if (err) {
            console.error(err);
            response.send(err);
          }
          console.log(resultado);
          response.send(resultado);
          
        connection.release();
        }
      );
    });
  });
}