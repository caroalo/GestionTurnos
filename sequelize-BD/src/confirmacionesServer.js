const express = require('express');
const cors = require('cors'); // Importa el paquete CORS
const app = express();
const confirmacionesRouter = require('./express/routes/confirmaciones');
const sequelize = require('./sequelize/sequelize-viejo'); // Asegúrate de que la ruta es correcta


// Configura CORS para permitir solicitudes desde cualquier origen
app.use(cors());

app.use(express.json());
app.use('/api', confirmacionesRouter);

const PORT = process.env.PORT || 8081;

app.post('/api/confirmaciones', (req, res) => {
  const { codigo, fecha, horario } = req.body;
  console.log('Datos recibidos:', { codigo, fecha, horario });
  // Lógica para guardar la confirmación
  res.status(200).send('Confirmación guardada');
});

app.listen(PORT, async () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');
    await sequelize.sync();
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
});

