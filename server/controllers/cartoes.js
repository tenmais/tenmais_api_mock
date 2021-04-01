const data = require('../data');
const utils = require('../utils');

function filterCartao(empresaId) {
  if (empresaId == 0) return data.cartoes;
  return data.cartoes.filter((cartao) => cartao.empresa.id === empresaId);
}

module.exports = {
  find: (req, res) => {
    let empresaId = 0;
    if (
      req.headers.authorization &&
      req.headers.authorization.endsWith('-daJrpSG50LWI')
    ) {
      empresaId = 1;
    } else if (
      req.headers.authorization &&
      req.headers.authorization.endsWith('-w_MqQtRdeFc7DUw')
    ) {
      empresaId = 2;
    }
    const cartoes = filterCartao(empresaId);
    console.log(`Retornando ${cartoes.length} cartoes`);
    res.send({ data: cartoes });
  }
};
