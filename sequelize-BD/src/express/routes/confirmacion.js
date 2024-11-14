// routes/confirmaciones.js
const express = require('express');
const router = express.Router();
const { models } = require('../../sequelize');

async function getAll(req, res) {
  let items;
  console.log("RESERVA GUARDADA PARA: ");
  console.log(req.query);
  if (req.query.fecha) {
    items = await models.confirmacion.findAll( {
			where: {
				fecha: req.query.fecha
			}
		});
  }
  else{
	  items = await models.confirmacion.findAll();
  }
  items = await models.confirmacion.findAll()
  res.status(200).json(items).end();
};

async function create(req, res) {
	if (!req.body.codigo) {
		res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
	} else {
		await models.confirmacion.create(req.body);
		res.status(201).end();
	}
};

module.exports = {
  getAll,
  create
};
