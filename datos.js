const jsonData = require('./resources/marvel.json');

const miMapa = new Map(Object.entries(jsonData['Marvel Cinematic Universe']));

module.exports.miMapa = miMapa
