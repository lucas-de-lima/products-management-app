# Documentação do Aplicativo de Registro de Produtos

## Cadastro de Produtos

### Como começar
Execute o comando na raiz do projeto:
É necessário que o Docker esteja instalado e configurado no computador!

    docker-compose up
Isso ira subir todos os containeres da aplicação. Você Saberá que está tudo pronto quando o Log do Next disser que o frontend já está pronto:

    app_frontend| ✓ Ready in 2.8s

Acesse o frontend na porta: `http://localhost:3000/`
A lista de produtos está: `http://localhost:3000/products`
O backend está na porta: `http://localhost:3001/api/products`
Está disponivel na raiz do proketo o arquivo Products.postman_collection.json para ser exportado no postman e realizar os testes de outros métodos na rota.

### Formulário de Cadastro

O formulário de cadastro permite inserir informações sobre um novo produto. Os campos disponíveis são:

-   **Nome do Produto:** Campo de texto para inserir o nome do produto.
-   **Descrição do Produto:** Campo de texto para inserir uma descrição detalhada do produto.
-   **Valor do Produto:** Campo de valor para inserir o preço do produto.
-   **Disponível para Venda:** Campo de seleção com duas opções: "sim" ou "não" para indicar se o produto está disponível para venda.

### Lista de Produtos

A lista de produtos exibe os produtos cadastrados com as seguintes colunas:

-   **Nome:** Nome do produto.
- **Descrição:** Descrição do produto.
- **Preço:** Preço do produto.
- **Disponível Para Venda:** Se está disponível para venda.

A lista é ordenada pelo valor do produto, do menor para o maior.

Ao cadastrar um novo produto, a listagem é atualizada automaticamente para exibir o novo produto inserido.

### Botão de Cadastro

Na listagem de produtos, há um botão para cadastrar um novo produto. Ao clicar nesse botão, o formulário de cadastro é exibido para inserir as informações do novo produto.

## Dados Técnicos

### Tecnologias Utilizadas

-   Backend: Kotlin com Spring Boot.
-   Frontend: Next.js com Tailwind CSS.

### Endpoint de Criação de Produtos

O endpoint para criar um novo produto é:


`POST http://localhost:3001/api/products` 

O corpo da requisição deve conter os seguintes dados no formato JSON:



    {
        "name": "Nome do Produto",
        "description": "Descrição do Produto",
        "price": 99.99,
        "available": true
    }
