const utils = require('../utils');

module.exports = {
  cartoes: utils.parseJson('./data/cartoes.json'),
  empresas: utils.parseJson('./data/empresas.json'),
  tokens: utils.parseJson('./data/tokens.json')
};
