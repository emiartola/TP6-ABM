import Instrumento from "./Instrumento";

let urlServer = "http://localhost:3000/instrumentos/"; 

export async function getInstrumentosJSON() {
	let datos = await fetch(urlServer, {
		method: "GET",
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		},
		mode: "cors"
	});
	console.log(datos);
	return await datos.json();
}


export async function getInstrumentoXId(id: number) {
	let datos = await fetch(urlServer + id, {
		method: "GET",
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		},
		mode: "cors"
	});
	console.log(datos);
	return await datos.json();
}


export async function deleteInstrumentoXId(id: number) {
	let datos = await fetch(urlServer + id, {
		method: "DELETE",
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		},
		mode: "cors"
	});
	console.log(datos);
	return await datos.json();
}

export async function saveInstrumento(instrumento?: Instrumento) {
	let method:string = "POST";
	if(instrumento  && instrumento.id != undefined && instrumento.id > 0 ){
		method = "PUT";
	}
	await fetch(urlServer, {
		"method": method,
		"body": JSON.stringify(instrumento),
		"headers": {
		  "Content-Type": 'application/json'
		}
});
}


export async function getInstrumentosXBuscador(termino:String){

	let response = await fetch("http://localhost:3000/instrumentosbuscar/" + termino, {
		method: 'GET',
        headers: {
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin':'*'
		},
        mode: 'cors'
	});
	console.log(response);
	return await response.json();
}
