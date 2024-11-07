const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./src/sequelize'); // Asegúrate de que la conexión a la base de datos esté configurada

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

// Ruta para obtener horarios
app.get('/api/horarios', async (req, res) => {
  const { fecha } = req.query;
  if (!fecha) {
    return res.status(400).json({ error: 'Se requiere la fecha' });
  }
  try {
    const horariosDisponibles = await sequelize.models.horario.findAll({ where: { fecha } });
    res.json(horariosDisponibles);
  } catch (error) {
    console.error('Error al consultar horarios:', error);
    res.status(500).json({ error: 'Error al consultar horarios' });
  }
});

// Ruta para guardar confirmación
app.post('/api/confirmacion', async (req, res) => {
  const { codigo, fecha, horario } = req.body;
  if (!codigo || !fecha || !horario) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }
  try {
    // Guarda la confirmación en la base de datos
    const nuevaConfirmacion = await sequelize.models.confirmacion.create({ codigo, fecha, horario });
    res.status(201).json(nuevaConfirmacion);
  } catch (error) {
    console.error('Error al guardar confirmación:', error);
    res.status(500).json({ error: 'Error al guardar confirmación' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
