const express = require('express');
const dotenv = require('dotenv');

dotenv.config();  // Cargar variables de entorno

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());  // Middleware para procesar JSON

// Rutas de ejemplo
app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
