require("dotenv").config();

const credentialGoogle = require("../keysGoogle.json");
const config = {
    idsheet196Courses: process.env.ID_SHEET_196_COURSES,
    client_email: credentialGoogle.client_email,
    private_key: credentialGoogle.private_key,
}

module.exports = config;