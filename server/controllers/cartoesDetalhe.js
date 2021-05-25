const data = require('../data')

function filterCartaoDetalhe(cartaoId) {
  let cartaoD = data.cartoesDetalhe.find((cartao) => cartao.id === cartaoId)
  const cartaoE = filterCartaoEmpresa(cartaoId)
  if (cartaoD != undefined) {
    if (typeof cartaoD.pontos == 'number') {
      cartaoD.pontos = cartaoE.pontos
    }
    return cartaoD
  }
  cartaoD = {
    cliente: Object.assign({}, cartaoE.usuario),
    criado_em: cartaoE.criado_em,
    importado_em: null,
    empresa_id: 1,
    id: cartaoE.id,
    pontos: [],
    premiado_em: cartaoE.premiado_em,
    programa: Object.assign({}, cartaoE.programa),
  }
  data.cartoesDetalhe.push(cartaoD)
  return cartaoD
}

function filterCartaoEmpresa(cartaoId) {
  return data.cartoesEmpresa.data.find((cartao) => cartao.id === cartaoId)
}

function updateCartaoEmpresa(cartao, pontos) {
  var dataAtual = new Date(Date.now())
  const cartaoEmpresa = filterCartaoEmpresa(cartao.id)
  cartaoEmpresa.atualizado_em = dataAtual.toISOString()
  cartaoEmpresa.pontos = pontos.length
  refreshOrderByDate()
}

function refreshOrderByDate() {
  data.cartoesEmpresa.data.sort((a, b) =>
    a.atualizado_em > b.atualizado_em ? -1 : 1
  )
}

module.exports = {
  find: (req, res) => {
    const { cartao_id } = req.params
    const cartao = filterCartaoDetalhe(cartao_id)
    res.send(cartao)
  },
  add: (req, res) => {
    const { cartao_id } = req.params
    const cartao = filterCartaoDetalhe(cartao_id)
    var randomId = Math.floor(Math.random() * 100) + 1
    var dataAtual = new Date(Date.now())
    const ponto = { id: randomId, criado_em: dataAtual.toISOString() }
    cartao.pontos.push(ponto)
    updateCartaoEmpresa(cartao, cartao.pontos)
    res.send(cartao)
  },
  remove: (req, res) => {
    const { cartao_id } = req.params
    const cartao = filterCartaoDetalhe(cartao_id)
    cartao.pontos.pop()
    updateCartaoEmpresa(cartao, cartao.pontos)
    res.send(cartao)
  },
  use: (req, res) => {
    const { cartao_id } = req.params
    const cartao = filterCartaoDetalhe(cartao_id)
    cartao.pontos = []
    updateCartaoEmpresa(cartao, cartao.pontos)
    res.status(201).send(cartao)
  },
}
