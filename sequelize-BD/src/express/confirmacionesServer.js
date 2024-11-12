// server.js
const express = require('express'); // Corrige el import de express
const app = express();
const confirmacionesRouter = require('./routes/confirmaciones');
const sequelize = require('src/sequelize/sequelize-viejo'); // Ruta corregida // Importa la configuración de Sequelize correctamente

app.use(express.json());
app.use('/api', confirmacionesRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  try {
    await sequelize.authenticate(); // Verifica la conexión a la base de datos
    console.log('Conexión a la base de datos establecida correctamente.');
    await sequelize.sync(); // Sincroniza los modelos con la base de datos
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
});
