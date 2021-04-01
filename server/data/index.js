const utils = require('../utils');

module.exports = {
  cartoes: utils.parseJson('./data/cartoes.json'),
  cartoesEmpresa: utils.parseJson('./data/cartoesEmpresa.json'),
  cartoesDetalhe: utils.parseJson('./data/cartoesDetalhe.json'),
  empresas: utils.parseJson('./data/empresas.json'),
  tokens: utils.parseJson('./data/tokens.json')
};
