const data = require("../data");
const utils = require("../utils");

function getCartao(id) {
  return data.cartoes.find(id => cartao.id === id);
}

module.exports = {
  find: (req, res) => {
    res.send({"data": data.cartoes});
  }
};
