require("dotenv").config();
const googleKeys = require('./keysGoogle.json');

const config = {
    idsheet196Courses: process.env.ID_SHEET_196_COURSES,
    client_email: googleKeys.client_email,
    private_key: googleKeys.private_key
}

module.exports = config;