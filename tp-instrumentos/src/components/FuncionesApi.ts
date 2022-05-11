
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