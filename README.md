# Tenmais API Mock

Disponibiliza de maneira simples uma API MOCK do backend para facilitar o desenvolvimento.

Replicando a API real:

- DEV: https://tunewest.com/api/
- PROD: https://tenmais.app/api/

## Como fazer o setup computer 💻

    make install

## Como rodar a API Mock 🚀

    run-api-mock

    OU

    # Para usar porta diferente
    API_PORT=5002 run-api-mock

    # Para usar CORS diferente
    ORIGIN_URL='http://192.168.0.15' run-api-mock

## Como ver documentação da API 📚

    👉 http://localhost:5001/api

## Como ver credentials 🤫 (cliente/empresa)

    👉 server/data/tokens.json

## Contribuindo

- 1: Garanta que o arquivo `server\openapi.yaml` e `server\openapi.json` estão atualizados
- 2: Altere a especificação (openapi.yaml) de forma a disponibilizar os endpoints/respostas para seu negócio
- 3: Implemente a versão MOCK da Api usando a pasta `data`

## FLUXO

    tenmais_api_mock
    ├──server
    │ ├── index.js         👉 Ponto de entrada (definição das rotas)
    │ ├── controllers      👉 Implementação da API
    │ │   └── *.js
    │ ├── data             👉 Dados de respostas da API
    │ │   └── *.json
    │ ├── openapi.yaml     👉 Definição da API
    │ ├── openapi.json     👉 Para o ReDoc funcionar (/api)
    │ ├── config.js
    │ └── utils.js
    ├── Makefile           👉 Comandos disponíveis
    .
    .
    .
