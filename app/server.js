const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; 

const API_MESSAGE = process.env.API_MESSAGE || "Mensaje por defecto de la API";
const SECRET_KEY = process.env.SECRET_KEY || "clave_secreta_por_defecto";

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/info', (req, res) => {
  console.log('Petición recibida en /api/info');
  res.json({ 
    message: API_MESSAGE,
    version: '1.0',
    environment: process.env.NODE_ENV || 'development',
    secret_status: SECRET_KEY ? 'Secreto cargado' : 'Secreto no cargado',
    timestamp: new Date() 
  });
});

app.listen(port, () => {
  console.log(`Servidor Node.js corriendo en http://localhost:${port}`);
  console.log(`API_MESSAGE configurado como: ${API_MESSAGE}`);
  console.log(`SECRET_KEY (parcial): ${SECRET_KEY.substring(0, 5)}...`);
});