# BFF Sample (Documentação em construção)

Stack GraphQL + NodeJS + Typescript + Apollo Server


## install

1. Obter nodejs 12 ou posterior.
2. Tenha última versão da master.

## Setup

1. `npm install` para instalar dependencias. 

Para iniciar o servidor Apollo
`ts-node index.ts`

Acesse servidor Apollo `http://localhost:8082/` e abaixo um exemplo de Query para teste.

```
{
  books {
    title
    author
  }
}
```


## Executando Localmente

Ativando o desenvolvimento local:

Acesse arquivo [.env](./.env) e consulte as variáveis de seu ambiente.

Após a configuração do ambiente, faça a execução do comando:

    npm run start:dev

Haverá um log onde haverão as informações de porta e do probe, conforme exemplo:

    Using Node Environment development
    Probe listening on port 45851
    Listening on port 8080 at context 

## Executando o docker

No instante em que o código estiver rodando localmente, havera a possibilidade de criar o docker utilizando o seguite comando:

    npm run docker-build

# Sample BFF 

Para um exemplo de BFF, acessar [NATION](https://watery-violet-7c7.notion.site/Pol-ticas-de-Desenvolvimento-para-BFFs-0fe76e69d8374f8790c6af6b85718ff9).



