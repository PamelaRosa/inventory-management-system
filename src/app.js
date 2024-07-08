/* eslint-disable linebreak-style */
const express = require('express');
const cors = require('cors'); // Importe o pacote cors
const routes = require('./routes');

const app = express();

// Use o middleware cors para permitir requisições de outros domínios
app.use(cors());

app.use(express.json()); // Certifique-se de adicionar essa linha se precisar de parsing JSON
routes(app);

module.exports = app;
