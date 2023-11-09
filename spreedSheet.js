const { JWT } = require ('google-auth-library');
const { GoogleSpreadsheet } = require("google-spreadsheet");

const coursesModel = require('./coursesModel');;
const { client_email, private_key, idsheet196Courses} = require('./config');

async function conexionGoogleSheet() {
    const serviceAccountAuth = new JWT({
      email: client_email,
      key: private_key,
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });
    const doc = new GoogleSpreadsheet(idsheet196Courses, serviceAccountAuth);
    await doc.loadInfo();
    //Solo se esta usando la primera hoja del libro
    const sheet = doc.sheetsByIndex[0];
    return sheet;
}

async function getSpreedSheet(){
    try {
        const sheet = await conexionGoogleSheet();
        const rows = await sheet.getRows();
        const data = coursesModel(rows);
        const infoResult = {...data};
        return infoResult;
    } catch (error) {
        console.log("Error en getSpreedSheat", error)
    }
}

module.exports = {
    getSpreedSheet: getSpreedSheet,
}