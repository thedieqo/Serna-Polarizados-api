const express = require('express');
const dotenv = require('dotenv');
const connection = require('./config/db');

dotenv.config();
const app = express();

app.use(express.json()); // NECESARIO para leer JSON en POST y PUT

// Rutas
const usuariosRoutes = require('./routes/usuarios');
app.use('/usuarios', usuariosRoutes);

// Endpoint de prueba
app.get('/ping', (req, res) => {
  res.send('pong');
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});