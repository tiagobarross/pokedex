# Pokedex - Aplicação Web de Pokémon

<img alt="projeto devlinks" src=".github/preview.jpg" width="100%">

## Objetivo

O objetivo deste projeto foi desenvolver uma aplicação web utilizando **Next.js**, **Tailwind CSS** e **Node.js**. A aplicação consome a **PokéAPI** para exibir uma lista de Pokémon e permite a interação do usuário com funcionalidades de **criação**, **edição**, **exclusão** e **filtro** de Pokémon.

A aplicação é responsiva e interativa, proporcionando uma experiência de usuário intuitiva e agradável.

## Funcionalidades

- **Listagem de Pokémon**: Exibe uma lista inicial com pelo menos 12 Pokémon consumidos da API pública (PokéAPI).
- **Criação de Pokémon**: Permite adicionar novos Pokémon à lista, mockando a criação no frontend (sem persistência real na API).
- **Edição de Pokémon**: Possibilita a alteração do nome de um Pokémon.
- **Exclusão de Pokémon**: Permite excluir um Pokémon da lista.
- **Filtro de Pokémon**: Implementa um campo de busca para filtrar os Pokémon pelo nome e ID.

## Tecnologias Utilizadas

- **Next.js**: Framework React para desenvolvimento de aplicações web.
- **Tailwind CSS**: Framework de estilização baseado em classes utilitárias para design responsivo e rápido.
- **React.js**: Biblioteca JavaScript para criação de interfaces de usuário.
- **Node.js**: Ambiente de execução para código JavaScript do lado do servidor (para consumo da PokéAPI).
- **React Query**: Biblioteca para gerenciamento de dados assíncronos (usada para consumir a PokéAPI).
- **PokéAPI**: API pública que fornece informações sobre Pokémon.

## Requisitos

Antes de rodar o projeto localmente, você precisa ter os seguintes pré-requisitos:

- Node.js e npm instalados na sua máquina.
- Acesso à internet para consumo da **PokéAPI**.

## Instalação

1. Clone este repositório para o seu computador:
   ```bash
   git clone https://github.com/seu-usuario/pokedex.git

2. Navegue até o diretório do projeto:
  ```bash
  cd pokedex
  ```

3. Instale as dependências:
  ```bash
  npm install
  ```

4. Rode o servidor de desenvolvimento:
  ```bash
  npm run dev
  ```

5. Abra o navegador e acesse: http://localhost:3000

## Estrutura do Projeto
- **pages/:** Contém as páginas principais da aplicação.

- **components/:** Componentes reutilizáveis, como os cards de Pokémon.

- **hooks/:** Hooks personalizados, como o hook para gerenciamento da lista de Pokémon.

- **styles/:** Arquivos de estilo, configurados com Tailwind CSS.

## Como Usar
1. **Exibir Pokémon:** Ao acessar a aplicação, a lista inicial de 10 Pokémon será exibida com as informações de imagem, nome e ID.

2. **Adicionar Pokémon:** Utilize o campo de entrada e o botão de "Adicionar Pokémon" para incluir novos Pokémon (mockados no frontend).

3. **Editar Pokémon:** Clique no botão de editar para alterar o nome de qualquer Pokémon da lista.

4. **Excluir Pokémon:** Clique no botão de excluir para remover um Pokémon da lista.

5. **Filtrar Pokémon:** Utilize o campo de busca para filtrar a lista de Pokémon pelo nome.

## Requisitos de UI/UX
- A interface é responsiva e adaptável a diferentes tamanhos de tela.
- A lista de Pokémon é exibida em cards com as informações de imagem, nome e ID.
- Os botões de editar e excluir estão visíveis em cada card.
- O botão de adicionar Pokémon fica no topo da lista de Pokémon.
