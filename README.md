# Node.js Express Template
Olá! Esse é um template base que uso em meus projetos feitos com express. 
Eslint, Sequelize e Nodemon com Sucrase estão previamente configurados.

## Bibliotecas utilizadas
*express* - o ponto de entrada do server está na classe `App`, no arquivo  `src/app.js`.
*cors* - previamente configurado para aceitar requisições Cross-Origin (de qualquer origem).
*dotenv* - arquivo .env configurado, contendo somente a porta.
*sequelize* - configurações de conexão em `src/config/database.js`, paths em `.sequelizerc`.
*eslint* - configurado no padrão do AirBnB.
*nodemailer* - envio de e-mail pré-configurado
*express-handlebars* - suporte para templates no envio de e-mails.

## Árvore de arquivos
```
src
|_app
  |_models
|_config
  |_database.js (autenticação do sequelize)
  |_mail.js (autenticação SMTP)
|_controllers
|_database
  |_migrations
  |_seeders
  |_index.js (carregamento e inicialização dos models)
|_lib
  |_ Mail.js (classe de envio de e-mail)
|_routes
|_views
  |_emails
    |_layouts (layout padrão de envio de email
    |_partials ("componentes" reutilizáveis para envio de e-mail)
    >|_ *.hbs (templates de e-mail)
  |_token (views relativas à confirmação de e-mail)
|_app.js (ponto de entrada express)
.env
.sequelizerc (configurações de paths do sequelize)
index.js (ponto de entrada do app)
nodemon.json
package.json
README.md 
```

## Configuração de ambiente
* Instalar o docker: https://docs.docker.com/engine/install/ubuntu/
* Criar um container para o banco de dados: https://hub.docker.com/_/postgres
* Criar somente o banco de dados na mão (recomendo o postbird pra Linux)
* Criar uma conta gratuita de SMTP: https://mailtrap.io
* Criar um arquivo .env (usar o .env.example como modelo)
* Preencher autenticação de e-mail e banco de dados

## Inicialização
* Clonar o projeto:   `git clone https://github.com/franco-dias/node-template.git`
* Instalar pacotes: `yarn`
* Criar o banco de dados com o nome especificado no arquivo `src/config/database.js` 
* Rodar migrations: `yarn sequelize db:migrate`
* Rodar seeds: `yarn sequelize db:seed:all`
* Executar projeto: `yarn start`

## Features iniciais
### Models e Migrations
Foi criado um model para usuário (tabela `user`) e um model para livro (tabela `book`). Os dois models possuem relação N:M por meio da tabela `user_books`.
### Seeders
Há um arquivo de seeders para popular o banco com alguns dos melhores livros do planeta.
### Routes
Foram criadas três rotas:
> * Listagem de usuários: 
> `GET /users` - retorna listagem de usuários e todos os livros a eles relacionados
> * Criação de usuário: 
> `POST /users` - espera  `{ name: String, age: Number }`
> * Relacionar usuário a livro: 
> `POST /user-books` - espera `{ userId: Number, books: Array<Number> }`, sendo `books` o array de ids dos livros.
### Controller
O controller de usuário (`src/controllers/UserController.js`) utiliza os métodos `list` e `store`. Há outros três métodos vazios que podem ser escritos. Acima de cada declaração de método há um comentário explicando para quê serve.
