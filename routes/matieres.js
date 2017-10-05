const router = require('express').Router();

module.exports = (api) => {
  router.post('/',
    api.middlewares.bodyParser.json(),
    api.actions.matieres.create);

  router.get('/getAllCours/:id',
    api.actions.matieres.getAllCours);

  return router;
}
