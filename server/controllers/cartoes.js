const data = require('../data');
const utils = require('../utils');

function getCartao(id) {
  return data.cartoes.find((id) => cartao.id === id);
}

function filterCartao(clientId) {
  if (clientId == 0) return data.cartoes;
  return data.cartoes.filter((cartao) => cartao.usuario.id === clientId);
}

module.exports = {
  find: (req, res) => {
    let cliendId = 0;
    if (req.headers.authorization.endsWith('OuJMdUdvpegb4nc8')) {
      cliendId = 4;
    } else if (req.headers.authorization.endsWith('Xe7kmjC270Pk')) {
      cliendId = 3;
    }
    const cartoes = filterCartao(cliendId);
    console.log(`Retornando ${cartoes.length} cartoes`);
    res.send({ data: cartoes });
  }
};
