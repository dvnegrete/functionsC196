const functions = require('@google-cloud/functions-framework');
const { getSpreedSheet } = require('./spreedSheet');

functions.http('C196', async (req, res) => {
    const allowedOrigins = ['https://cecati196.edu.mx', 'http://localhost:4200', 'https://localhost:4200'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
    const infoResult = await getSpreedSheet();
    res.json(infoResult);
  });