module.exports = (api) => {
  api.middlewares = {
    logger: require('./logger'),
    bodyParser: require('body-parser')
  };
};
