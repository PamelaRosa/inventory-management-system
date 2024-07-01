Este arquivo README.md fornece uma visão geral clara do projeto, suas dependências, como configurar o ambiente, a estrutura do projeto, funcionalidades principais, e informações sobre como contribuir. Certifique-se de ajustar conforme necessário para refletir detalhes específicos do seu projeto.

# inventory-management-system

Repositório de sistema de gerenciamento de inventário

## Descrição do Projeto

O projeto consiste em uma aplicação desenvolvida em Node.js com Express.js, que utiliza o Sequelize como ORM para gerenciar um banco de dados MySQL.

## Requisitos

- Node.js (v14.x ou superior)
- MySQL (mysql2 3.10.1 ou superior)
- Sequelize (6.32.1)
- Express.js

## Configuração do Ambiente

1. **Instalação de Dependências**

   Após clonar o repositório, instale as dependências necessárias:

   ```bash
   npm install
   ```

2. **Configuração do Banco de Dados**

- Crie um banco de dados MySQL.
- Configure as credenciais de acesso ao banco de dados no arquivo src/config/config.json.

3. **Execução das Migrations**

Execute as migrations para criar as tabelas no banco de dados:

```bash
 npx sequelize-cli db:migrate
```

4. **Execução do Projeto**
Inicie o servidor localmente:

```bash
npm run dev
```

O servidor estará disponível em http://localhost:3000.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```sh
.
├── src
    ├── controllers
    │   
    ├── database
    │    ├── config
    │    ├── migrations
    │    ├── models
    │    ├── seeders
    │ 
    ├── routes
    │  
    ├── services
├── app.js
├── .sequelizerc
├── package.json
└── .server.js
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests para melhorar o projeto.