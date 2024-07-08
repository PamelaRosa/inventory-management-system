Este arquivo README.md fornece uma visão geral clara do projeto, suas dependências, como configurar o ambiente, a estrutura do projeto, funcionalidades principais, e informações sobre como contribuir. Certifique-se de ajustar conforme necessário para refletir detalhes específicos do seu projeto.

# inventory-management-system

Repositório de sistema de gerenciamento de inventário

## Descrição do Projeto

O projeto consiste em uma aplicação full-stack desenvolvida vite e react para front-end e Node.js com Express.js para o back-end, que utiliza o Sequelize como ORM para gerenciar um banco de dados MySQL.

## Requisitos

- Node.js (v14.x ou superior)
- MySQL (mysql2 3.10.1 ou superior)
- Sequelize (6.32.1)
- Express.js

## Configuração do Ambiente

1. **Instalação de Dependências**

   Após clonar o repositório, instale as dependências necessárias dentro da pasta de `backend` e `frontend`:

```bash
npm install
```

- Instalação do Sequelize no `backend`

Para utilizar o Sequelize em seu projeto, instale o pacote npm `sequelize` e o driver MySQL `mysql2` dentro da pasta de `backend`:

```bash
npm install sequelize mysql2
```

- Validação de CNPJ

O campo `cnpj` no modelo `Supplier` é validado para garantir que é um CNPJ válido. Utilizamos a biblioteca `cpf-cnpj-validator` para realizar essa validação.

   - Instalação da Biblioteca de Validação no `backend`

Para instalar a biblioteca de validação de CNPJ, execute o seguinte comando:

```bash
npm install cpf-cnpj-validator
```

2. **Configuração do Banco de Dados**

- Crie um banco de dados MySQL.
- Configure as credenciais de acesso ao banco de dados no arquivo src/database/config/config.json.

3. **Execução das Migrations**

Execute as migrations para criar as tabelas no banco de dados:

```bash
 npx sequelize-cli db:migrate
```

4. **Execução do Projeto**
Inicie o servidor localmente, executar o comando na pasta de `backend` e `frontend`:

```bash
npm run dev
```

O servidor estará disponível em http://localhost:3000.
O projeto estará disponível em http://localhost:5173.


## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests para melhorar o projeto.