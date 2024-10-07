# Product Management Frontend

Esse é o projeto da parte visual do Product Management. Feito em **Next.JS** usando **React 16**.


## Funcionalidades

- **Gerenciamento de Usuários**:
  - Criar um novo usuário
  - Listar todos os usuários

- **Gerenciamento de Produtos**:
  - Criar um novo produto
  - Listar todos os produtos
  - Atualizar informações de um produto existente
  - Excluir um produto





## Dependências
- **API Backend** (Necessário rodar o código do backend na porta 3001)
- **Node.js** (versão 18 ou superior) ou utilize a versão LTS (*Hydrogen*)
- **nvm** (opcional, para gerenciamento de versões do Node.js)
## Instalação


Clone o repositório.

```bash
  git clone https://github.com/thonycsdev/product-management.git
  cd product-management
```
Utilize o `nvm` para garantir que está usando a versão LTS (Hydrogen) do Node.js:

```bash
nvm use
```
Instale as dependências com `Yarn`:
```bash
yarn
```
Caso não tenha o yarn instalado, você pode instalá-lo globalmente:
```bash
npm install --global yarn
```

Inicie o servidor de desenvolvimento
```bash
yarn dev
```

## Autor

- [@thonycsdev](https://github.com/thonycsdev)


## Roadmap

- Colocar URL da api na .env
- Colocar tratamento de inputs para: **CPF** e **e-mail**
- Criar componente para ser o input de valores monetários
- Colocar indicadores de carregamento
- Colocar indicadores de erros.
- Formatação e mascaras em diversos inputs nos formulários
- Efeitos e animações

- **Terminar a implementação de Auth com `useUser`**

- Privar rotas
- Colocar permissões adequadas para Administrador e Comum.

