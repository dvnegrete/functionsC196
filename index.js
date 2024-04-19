const functions = require('@google-cloud/functions-framework');
const { getSpreedSheet, postSpreedSheet } = require('./spreedSheet');
const coursesModel = require('./coursesModel');

functions.http('C196', async (req, res) => {
  const allowedOrigins = ['https://cecati196.edu.mx', 'http://localhost:4200', 'https://localhost:4200'];
  const origin = req.headers.origin;
  console.log(origin)
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  switch (req.method) {
    case 'GET':
      const rows = await getSpreedSheet();
      const data = coursesModel(rows);
      const infoResult = {data};
      console.log("GET, antes del RES.json()")
      res.json(infoResult);
      break;
    case 'POST':
      await postSpreedSheet(req.body);
      const result = await lastRegistration();
      res.json({message: "Se añadio el Curso " + result });
      break;
    case 'DELETE':
      console.log("voy a borrar este curso:", req.body)
      res.json({message:"Curso Borrado"});
      break;
    case 'PATH':
      console.log("Actualiza esta parte:", req.body)
      res.json({message:"Curso Actualizado.", });
      break;    
    default:
      console.log("Error en la petición")
      res.json({message:"Error en la petición", });
      break;
  }
});

async function lastRegistration() {
  const rows = await getSpreedSheet();
  const countRows = rows.length;
  const lastInscription = rows[countRows-1].get('curso');
  return lastInscription;
}

functions.http('token', async (req, res) => {
  //crear y probar para generar token desde cloud functions
  const allowedOrigins = ['https://cecati196.edu.mx', 'http://localhost:4200', 'https://localhost:4200'];
  const origin = req.headers.origin;
  console.log(origin)
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
});