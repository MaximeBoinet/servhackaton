module.exports = (api) => {
  api.actions = {
    cours: require('./cours/crud')(api),
    matieres: require('./matiere/crud')(api),
    personne: require('./personne/crud')(api),
    question: require('./question/crud')(api),
    reponse: require('./reponse/crud')(api)
  };
};
