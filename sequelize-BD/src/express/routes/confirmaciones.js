// routes/confirmaciones.js
const express = require('express');
const router = express.Router();
const { Confirmacion } = require('src/sequelize/models/confirmacion.model');

router.get('/confirmaciones', async (req, res) => {
  try {
    const confirmaciones = await Confirmacion.findAll();
    res.json(confirmaciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las confirmaciones' });
  }
});

router.post('/confirmaciones', async (req, res) => {
  try {
    const { codigo, fecha, horario } = req.body;
    const nuevaConfirmacion = await Confirmacion.create({ codigo, fecha, horario });
    res.status(201).json(nuevaConfirmacion);
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar la confirmación' });
  }
});

module.exports = router;
