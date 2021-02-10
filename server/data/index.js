const utils = require("../utils");

module.exports = {
  cartoes: utils.parseJson("./data/cartoes.json"),
  cartoesResumidos: utils.parseJson("./data/cartoesResumidos.json"),
};
