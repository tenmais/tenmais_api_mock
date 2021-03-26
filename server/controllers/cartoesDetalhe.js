const data = require('../data');
const utils = require('../utils');

function filterCartao(cartaoId) {
  return data.cartoesDetalhe.find((cartao) => cartao.id === cartaoId);
}

module.exports = {
  find: (req, res) => {
    const { cartao_id } = req.params;
    const cartao = filterCartao(cartao_id);
    res.send(cartao);
  }
};
