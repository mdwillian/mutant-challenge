<h1 align="center">
  Mutant Challenge
</h1>

## 🛠 Tecnologias

Tecnologias utilizadas na construção da api foram:

- [NodeJS][nodejs]
- [Express][express]
- [TypeScript][typescript]
- [MySql][mysql]
- [Docker][docker]
- [ElasticSearch][elasticsearch]

### 🧭 Rodar a API

```bash
# Clone este repositório
$ git clone https://github.com/mdwillian/mutant-challenge.git

# Acesse a pasta do projeto no seu terminal
$ cd mutant-challenge

# Crie o arquivo com as variáveis de ambiente
$ cp .env.example .env

# Instale as dependências
$ yarn install

# Instale/Inicialize o docker em sua máquina

# Inicialize os containers
$ docker-compose up -d

# A aplicação será aberta na porta 3333 - Ex: http://localhost:3333/users

# Para testar importar o arquivo Mutant-Challenge.postman_collection no Postman

```

[nodejs]: https://nodejs.org/
[express]: https://expressjs.com/
[typescript]: https://www.typescriptlang.org/
[mysql]: https://www.mysql.com/
[docker]: https://www.docker.com/
[elasticsearch]:https://www.elastic.co/
