const data = require('../data');
const utils = require('../utils');

function getEmpresaById(empresaId) {
  return data.empresas.find((empresa) => empresa.id === empresaId);
}

module.exports = {
  getEmpresa: (req, res) => {
    const { empresa_id } = req.params;
    const empresa = getEmpresaById(parseInt(empresa_id));
    res.send(empresa);
  }
};
