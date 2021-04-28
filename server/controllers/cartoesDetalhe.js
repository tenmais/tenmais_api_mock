const data = require('../data')
const utils = require('../utils')

function filterCartao(cartaoId) {
  cartaoId = 1
  return data.cartoesDetalhe.find((cartao) => cartao.id === cartaoId)
}

module.exports = {
  find: (req, res) => {
    const { cartao_id } = req.params
    const cartao = filterCartao(cartao_id)
    res.send(cartao)
  },
  add: (req, res) => {
    const { cartao_id } = req.params
    const cartao = filterCartao(cartao_id)
    var randomId = Math.floor(Math.random() * 100) + 1
    var dataAtual = new Date(Date.now())
    cartao.pontos.push({ id: randomId, criado_em: dataAtual.toISOString() })
    res.send(cartao)
  },
  remove: (req, res) => {
    const { cartao_id } = req.params
    const cartao = filterCartao(cartao_id)
    cartao.pontos.pop()
    res.send(cartao)
  },
  use: (req, res) => {
    const { cartao_id } = req.params
    const cartao = filterCartao(cartao_id)
    cartao.pontos = []
    res.status(201).send(cartao)
  },
}
