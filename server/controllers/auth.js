const data = require('../data');

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getTokenDoUsuario(phone, email, password) {
  if (phone != undefined) {
    return data.tokens.find((token) => token.usuario.fone === phone);
  } else {
    return data.tokens.find(
      (token) => token.usuario.email === email && password != undefined
    );
  }
}

module.exports = {
  find: (req, res) => {
    const { phone, email, password } = req.body;
    let token = null;

    sleep(800).then(() => {
      token = getTokenDoUsuario(phone, email, password);
      if (token == undefined) {
        res.status(404).end();
      }
      res.send(token);
    });
  }
};
