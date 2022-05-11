import { Request, Response } from "express";
import { bd } from "../dbmysql";

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
          }
          // console.log(resultado);
          response.send(resultado[0]);
          
        connection.release();
        }
      );
    });
  });
}
