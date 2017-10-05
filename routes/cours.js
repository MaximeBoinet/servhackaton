const router = require('express').Router();

module.exports = (api) => {
  router.post('/',
    api.middlewares.bodyParser.json(),
    api.actions.cours.create);

  router.get('/allFromCours/:id',
    api.actions.cours.getAllQuestionOfThisCoursTaVu);

  router.delete('/:id',
    api.actions.cours.deletec);

  return router;
}
