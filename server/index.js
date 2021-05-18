const express = require('express')
const redoc = require('redoc-express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const { OpenApiValidator } = require('express-openapi-validator')

const config = require('./config')
const cartoes = require('./controllers/cartoes')
const cartoesEmpresa = require('./controllers/cartoesEmpresa')
const cartoesDetalhe = require('./controllers/cartoesDetalhe')
const auth = require('./controllers/auth')
const empresas = require('./controllers/empresas')

const YELLOW = '\x1b[33m%s\x1b[0m'
const WHITE = '\x1b[37m'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.text())
app.use(bodyParser.json())

const cors_origin_url = process.env.ORIGIN_URL || 'http://localhost:8080'

app.use(logger('dev'))
app.use(cors({ credentials: true, origin: cors_origin_url }))

app.get('/api/swagger.json', (req, res) => {
  res.sendFile(config.OPENAPI_JSON, { root: '.' })
})
app.get(
  '/api',
  redoc({
    title: 'API Mock',
    specUrl: '/api/swagger.json',
  })
)

new OpenApiValidator({
  apiSpec: config.OPENAPI_SPEC,
  validateRequests: true,
  validateResponses: false,
})
  .install(app)
  .then(() => {
    app.post('/api/auth/login/phone', auth.find)
    app.post('/api/auth/signin', auth.find)
    app.get('/api/cartao', cartoes.find)
    app.get('/api/cartao/:cartao_id', cartoesDetalhe.find)
    app.post('/api/cartao/:cartao_id/ponto/adiciona', cartoesDetalhe.add)
    app.delete('/api/cartao/:cartao_id/ponto/:ponto_id', cartoesDetalhe.remove)
    app.post('/api/cartao/:cartao_id/ponto/utiliza', cartoesDetalhe.use)
    app.get('/api/empresa/:empresa_id', empresas.getEmpresa)
    app.get('/api/empresa/:empresa_id/cartao', cartoesEmpresa.find)

    http: app.listen(config.PORT, () => {
      console.log(
        YELLOW,
        '🆙 JSON Server is running on port: ' + config.PORT,
        WHITE
      )
    })
  })
