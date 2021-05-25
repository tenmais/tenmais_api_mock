module.exports = {
  PORT: process.env.API_PORT || 5001,
  ORIGIN_URL: process.env.ORIGIN_URL || '*',
  OPENAPI_SPEC: 'server/openapi.yaml',
  OPENAPI_JSON: 'server/openapi.json',
}
