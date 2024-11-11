const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./src/sequelize'); // Asegúrate de que la conexión a la base de datos esté configurada

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

// Ruta para obtener confirmaciones
app.get('/api/confirmaciones', async (req, res) => {
  try {
    const confirmaciones = await sequelize.models.confirmacion.findAll();
    res.json(confirmaciones);
  } catch (error) {
    console.error('Error al consultar confirmaciones:', error);
    res.status(500).json({ error: 'Error al consultar confirmaciones' });
  }
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
