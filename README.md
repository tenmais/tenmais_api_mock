# tenmais_api_mock

Disponibiliza de maneira simples uma API MOCK do backend para facilitar o desenvolvimento.

1 - Garanta que o arquivo `server\openapi.yaml` está atualizado
2 - Altere a especificação (openapi.yaml) de forma a disponibilizar os endpoints/respostas para seu negócio
3 - Implemente a versão MOCK da Api usando a pasta `data`

## Como utilizar

    yarn install

    yarn mock

    OU

    ORIGIN_URL='http://192.168.0.15' yarn mock

    OU

    API_PORT=5002 ORIGIN_URL='http://localhost:8081' yarn mock
