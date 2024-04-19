const { JWT } = require ('google-auth-library');
const { GoogleSpreadsheet } = require("google-spreadsheet");

const coursesModel = require('./coursesModel');
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
    //const sheet = doc.sheetsByIndex[0];

    //Para ejecución de pruebas en BD-C196
    const sheet = doc.sheetsByIndex[1];
    return sheet;
}

async function getSpreedSheet(){
    try {
        const sheet = await conexionGoogleSheet();
        const rows = await sheet.getRows();        
        return rows;
    } catch (error) {
        console.log("Error en getSpreedSheat", error)
    }
}

async function postSpreedSheet(body) {
    try {
        const sheet = await conexionGoogleSheet();
        const obj = {
            curso: body.courseName,
            especialidad: body.specialty,
            contenido_tematico: body.thematicContent,
            objetivo: body.objective,
            hora_inicio: body.startTime,
            hora_fin: body.endTime,
            fecha_inicio: body.startDate,
            fecha_termino: body.endDate,
            dias_de_clases: body.daysOfClasses,
            costo: body.cost,
            profesor: body.professor,
            horas: body.hours,
            tipo_de_curso: body.courseType,
            modalidad_curso: body.courseModality,
            frase_busqueda: body.searchPhrase,
            observaciones: body.observations,
        }
        await sheet.addRow(obj);
        return sheet;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getSpreedSheet: getSpreedSheet,
    postSpreedSheet: postSpreedSheet,
}