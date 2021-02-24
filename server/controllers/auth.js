const data = require('../data');

function getTokenDoUsuario(phone) {
  return data.tokens.find((token) => token.usuario.fone === phone);
}

module.exports = {
  find: (req, res) => {
    const { phone } = req.body;
    const token = getTokenDoUsuario(phone);
    if (token == undefined) {
      res.status(404).end();
    }
    res.send(token);
  }
};
