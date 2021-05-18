const data = require('../data')

module.exports = {
  find: (req, res) => {
    const { empresa_id } = req.params
    console.log(empresa_id)
    if (empresa_id == 0) return []
    res.send(data.cartoesEmpresa)
  },
}
