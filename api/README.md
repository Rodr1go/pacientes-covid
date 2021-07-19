# API

Esta aplicação está configurada com:

1. Bodyparser
2. CORS
3. Lucid ORM
4. Migrations and seeds

**A API em execução:**

## Setup
```bash
Clone o repositório.

# instalar dependências
npm install

# criar arquivo env
cp .env.example .env

# gerar chave de aplicativo
node ace generate:key

# editar configurações
nano .env

# Executar as migrations
node ace migration:run

# Executar o seeder
node ace db:seed 

# startar a API
node ace serve --watch
```

