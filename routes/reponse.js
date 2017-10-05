const router = require('express').Router();

module.exports = (api) => {
	router.post('/',
		api.middlewares.bodyParser.json(),
		api.actions.reponse.create);

  router.put('/validate',
		api.actions.reponse.validate);

  router.delete('/del/:id',
    api.actions.reponse.deleter);

	return router;
}
