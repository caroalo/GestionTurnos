const express = require('express');
const bodyParser = require('body-parser');

const routes = {
	horarios: require('./routes/horarios'),
	confirmaciones: require('./routes/confirmacion')
	// Add more routes here...
	// items: require('./routes/items'),
};

const app = express();
const cors = require('cors');
const router = require('./routes/confirmacion');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

// We create a wrapper to workaround async errors not being transmitted correctly.
function makeHandlerAwareOfAsyncErrors(handler) {
	return async function(req, res, next) {
		try {
			await handler(req, res);
		} catch (error) {
			next(error);
		}
	};
}

// We define the standard REST APIs for each route (if they exist).
for (const [routeName, routeController] of Object.entries(routes)) {
	if (routeController.getAll) {
		app.get(
			`/api/${routeName}`,
			makeHandlerAwareOfAsyncErrors(routeController.getAll)
		);
		console.log("hfhgfhgfhg")
	}
	if (routeController.getById) {
		app.get(
			`/api/${routeName}/:id`,
			makeHandlerAwareOfAsyncErrors(routeController.getById)
		);
	}
	if (routeController.create) {
		app.post(
			`/api/${routeName}`,
			makeHandlerAwareOfAsyncErrors(routeController.create)
		);
	}
	if (routeController.update) {
		app.put(
			`/api/${routeName}/:id`,
			makeHandlerAwareOfAsyncErrors(routeController.update)
		);
	}
	if (routeController.remove) {
		app.delete(
			`/api/${routeName}/:id`,
			makeHandlerAwareOfAsyncErrors(routeController.remove)
		);
	}
}

app.get(`/api/horarios`,
	makeHandlerAwareOfAsyncErrors(routes.horarios.getAll)
);

app.get(`/api/confirmaciones`,
    makeHandlerAwareOfAsyncErrors(routes.confirmaciones.getAll)
);

module.exports = app;
