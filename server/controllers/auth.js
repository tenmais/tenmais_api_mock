const data = require("../data");

function getCartao(phone) {
  return data.cartoesResumidos.find(cartao => cartao.usuario.fone === phone);
}

module.exports = {
  find: (req, res) => {
    const { phone } = req.body;
    const cartao = getCartao(phone);
    if (cartao == undefined) {
      res.status(404).end();
    }
    res.send({"cartao": cartao});
  }
};
