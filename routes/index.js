module.exports = (api) => {
	api.use(api.middlewares.logger);
	api.use('/users', require('./users')(api));
	api.use('/reponse', require('./reponse')(api));
	api.use('/question', require('./question')(api));
	api.use('/cours', require('./cours')(api));
	api.use('/matieres', require('./matieres')(api));
};
