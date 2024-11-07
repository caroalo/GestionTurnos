const { models } = require('../../sequelize');
const { getIdParam } = require('../helpers');

async function getAll(req, res) {
  let items;
  console.log("LA FECHA ES");
  console.log(req.query);
  if (req.query.fecha) {
    items = await models.horario.findAll( {
			where: {
				fecha: req.query.fecha
			}
		});
  }else{
	  items = await models.horario.findAll();
  }
  res.status(200).json(items);
};


module.exports = {
	getAll,
};