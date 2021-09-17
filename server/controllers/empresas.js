const data = require('../data')
const utils = require('../utils')

function getEmpresaById(empresaId) {
  return data.empresas.find((empresa) => empresa.id === empresaId)
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

module.exports = {
  getEmpresa: (req, res) => {
    const { empresa_id } = req.params
    const empresa = getEmpresaById(parseInt(empresa_id))

    if (!empresa) {
      res.status(404).send({
        detail: `Empresa ID: '${empresa_id}' não encontrada`,
        status: 404,
        title: 'Not Found',
      })
    } else {
      sleep(800).then(() => {
        res.send(empresa)
      })
    }
  },
}
