
<h3 align="center">API - GamesList</h3>

<div align="center">

[![Status](https://img.shields.io/badge/Status-Complete-brightgreen)]()

</div>

---

<p align="center"> Objetivo do projeto: 
  Avaliar a capacidade técnica, crítica e raciocínio lógico, na construção de uma API para acesso a uma camada de dados.
    <br> 
</p>

## 📝 Indice

- [Sobre](#about)
- [Primeiros passos](#getting_started)
- [Como usar](#usage)
- [Built Using](#built_using)


## 🧐 Sobre <a name = "about"></a>

<p>
  Teste para Node.Js Developer
  Construção de uma API que deverá receber como parâmetro titulo, preço e ano de lançamento de jogos afins de criar cadastro de games no banco podendo criar, 
  editar, remover, listar.
  Retornando um Json com resumo do que há no banco.
</p>


## 🏁 Primeiros passos <a name = "getting_started"></a>

### Pre-requisitos
Banco de dados MySQL

Node.js e NPM instalado na maquina que irá rodar o projeto.

Criação aas váriaveis de ambiente que são necessárias neste projeto para acesso e manipulação do banco.


| Arquivo            | Variável          | Descrição                                              |
| ------------------ | ----------------- | ------------------------------------------------------ |
| DATABASE.JS        | DATABASE_DATABASE | Nome da Tabela no banco de dados                       |
| DATABASE.JS        | DATABASE_USERNAME | Usuario de acesso ao banco de dados                    |
| DATABASE.JS        | DATABASE_PASSWORD | Senha de acesso ao banco de dados                      |

<img src="https://github.com/fabricio-26/api-rest-games/blob/main/api/others/img.jpeg">


### Instalando

Iniciar instalação de pacotes necessários com NPM:
```
npm install
```
Executar serviço API:
```
node api/index.js
```
Se tudo ocorreu bem, após ter configurado corretamente o banco de dados, após executar o comando acima, deverá obter a seguinte mensagem no terminal:
```
Server started on port 2222! 🏆 GET http://localhost:2222
```
Indicando que o servidor está rodando em localhost na porta 2222
## 🎈 Games EndPoints <a name="usage"></a>
_Endpoint_

### GET Rountes

#### */games/*
Este _EndPoint_ retorna uma lista com todas as informações sobre todos os jogos registrados no banco de dados.

##### - Parameters
Esta rota não tem nenhum parâmetro.

##### - Retorno
###### OK 200 ```OK```
Se for retornado **OK**, é porque está tudo ok, e todos os jogos foram retornados.
Exemplo:
```
[
  {
    "id": 1,
    "title": "FIFA 2022",
    "year": 2022,
    "price": 199,
    "createdAt": "2022-10-13T12:12:35.000Z",
    "updatedAt": "2022-10-13T12:12:35.000Z"
  },
  {
    "id": 2,
    "title": "CS: GO",
    "year": 2010,
    "price": 59,
    "createdAt": "2022-10-13T12:14:11.000Z",
    "updatedAt": "2022-10-13T12:14:11.000Z"
  }
]
```
###### Bad Request 400 ```Bad Request```
Esta resposta é retornada se a solicitação não for válida.

###### Internal server error 500 ```Internal server error```
Esta resposta é retornada se algo ruim aconteceu no servidor ou se a rota colocada no campo url não existe.
<hr>

#### */games/:id*
Esta rota é usada para retornar um jogo específico, que tem o id recebido como parâmetro, como *id*.

##### - Parameters
###### *id* 
Nesta rota o usuário deve passar o **id** do jogo para retornar suas informações.

##### - Retornos
###### Bad Request 400 ```Bad Request```
Se o parâmetro *id* não for um número, será retornado `` Bad request 400 ``
###### internal Server Error 500 ```internal Server Error```
Se esta resposta for retornada é porque algo ruim aconteceu no servidor;
###### Not found 404 ```Not found```
Se a resposta for `` Not found 404 ``, é porque a API recebeu e aceitou o parâmetro,
mas foi encontrado algum jogo com o parâmetro como *id*
###### OK 200 ```OK``
Se for retornado *OK*, é porque os parâmetros foram aceitos, e os jogos foram encontrados e devolvidos com sucesso.
 Assim o games, que tem o parâmetro id como id, as informações serão retornadas.
Exempplo:
```
{
  "i"id": 2,
	"title": "CS: GO",
	"year": 2010,
	"price": 59,
	"createdAt": "2022-10-13T12:14:11.000Z",
	"updatedAt": "2022-10-13T12:14:11.000Z"
  }
```

### POST  Routes 
#### */games*
...













Em desenvlolvimento!

```

## ⛏️ Built Using <a name = "built_using"></a>

- [MySQL](https://https://www.mysql.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Sequelize](https://sequelize.org/) - ORM Framework

