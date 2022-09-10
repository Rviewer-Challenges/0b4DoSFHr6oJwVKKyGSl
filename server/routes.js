const express = require('express');
const routes = express.Router();
const { jsonController } = require('./controllers');

routes.post('/json', (req, res) => jsonController);

module.exports = routes;