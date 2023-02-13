# Beyond the system - Front-end

## Como executar o projeto ⚒️

1. Certifique-se de ter instalado as seguintes dependências:
    - Node v18.13.0 ou superior;
    - Git;
    - Docker e docker-compose. 
2. No diretório raiz do projeto, copie o arquivo `.env.example` e cole seu conteúdo em um novo arquivo chamado `.env`. A instância do banco de dados será criada com as credenciais que forem informadas neste arquivo.
3. Abra uma aba do terminal, navegue até o diretório raiz do projeto e execute o comando `docker-compose up -d`;
4. Uma vez que o container executando postgres seja inicializado, execute o seguinte comando `npm install && npm run migrate && npm run seed && npm run dev`;

Pronto! A API funcionará por padrão na porta 8000.

## Endpoints disponíveis

GET, POST: `http://localhost:8000/api/v1/despesas`;
PUT, PATCH, DELETE: `http://localhost:8000/api/v1/despesas/ID_DESPESA`;