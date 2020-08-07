require('dotenv').config();

const express = require('express');
const cors = require('cors')

const { dbConnection } = require('./database/config');

// Crear el servidor express
const app = express();

// Configurar cors
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

// Base de datos
dbConnection();

// Directorio publico
app.use(express.static('public'));

// Rutas
app.use('/api/usuarios', require('./routes/usuarios.route'));
app.use('/api/hospitales', require('./routes/hospitales.route'));
app.use('/api/medicos', require('./routes/medicos.route'));
app.use('/api/todo', require('./routes/busquedas.route'));
app.use('/api/login', require('./routes/auth.route'));
app.use('/api/upload', require('./routes/uploads.route'));

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);
});