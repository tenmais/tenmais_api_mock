const data = require('../data');
const utils = require('../utils');

function getEmpresaById(empresaId) {
  return data.empresas.find((empresa) => empresa.id === empresaId);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = {
  getEmpresa: (req, res) => {
    const { empresa_id } = req.params;
    const empresa = getEmpresaById(parseInt(empresa_id));

    sleep(800).then(() => {
      res.send(empresa);
    });
  }
};
