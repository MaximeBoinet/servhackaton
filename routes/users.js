const router = require('express').Router();

module.exports = (api) => {
	router.post('/exist',
		api.middlewares.bodyParser.json(),
		api.actions.personne.exist);

	router.get('/matieres/:id',
		api.actions.personne.getAllMatiere);

	return router;
}
