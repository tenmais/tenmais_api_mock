const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const { OpenApiValidator } = require('express-openapi-validator');

const config = require('./config');
const cartoes = require('./controllers/cartoes');
const auth = require('./controllers/auth');
const empresas = require('./controllers/empresas');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json());

const cors_origin_url = process.env.ORIGIN_URL || 'http://localhost:8080';

app.use(logger('dev'));
app.use(cors({ credentials: true, origin: cors_origin_url }));

new OpenApiValidator({
  apiSpec: config.OPENAPI_SPEC,
  validateRequests: true,
  validateResponses: true
})
  .install(app)
  .then(() => {
    app.get('/api/cartao', cartoes.find);
    app.post('/api/auth/login/phone', auth.find);
    app.get('/api/empresa/:empresa_id', empresas.getEmpresa);

    app.listen(config.PORT, () => {
      console.log('JSON Server is running on port: ' + config.PORT);
    });
  });
