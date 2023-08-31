const functions = require('@google-cloud/functions-framework');
const { getSpreedSheet } = require('./utils/spreedSheet');

functions.http('apiC196', async (req, res) => {
    const infoResult = await getSpreedSheet();
    res.json(infoResult);
});