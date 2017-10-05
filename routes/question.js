const router = require('express').Router();

module.exports = (api) => {
  router.post('/',
    api.middlewares.bodyParser.json(),
    api.actions.question.create);

  router.delete('/:id',
    api.actions.question.deleteq);

  router.get('/allRes/:id',
    api.actions.question.getAllReponse);

  return router;
}
