const router = require('express').Router();

module.exports = (api) => {
	router.post('/exist',
		api.middlewares.bodyParser.json(),
		api.actions.personne.exist);

	return router;
}
