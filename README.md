# Beyond the system - Front-end

## Como executar o projeto ⚒️

1. Certifique-se de ter instalado as seguintes dependências:
    - Node v18.13.0 ou superior;
    - Git;
    - Docker e docker-compose. 
2. Abra uma aba do terminal, navegue até o diretório raiz do projeto e execute o comando `docker-compose up -d`;
3. Uma vez que o container executando postgres seja inicializado, execute o seguinte comando `npm install && npm run migrate && npm run seed`;

Pronto! A API funcionará por padrão na porta 8000.
