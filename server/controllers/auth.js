const data = require('../data');

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getTokenDoUsuario(phone) {
  return data.tokens.find((token) => token.usuario.fone === phone);
}

module.exports = {
  find: (req, res) => {
    const { phone } = req.body;
    let token = null;

    sleep(800).then(() => {
      token = getTokenDoUsuario(phone);
      if (token == undefined) {
        res.status(404).end();
      }
      res.send(token);
    });
  }
};
