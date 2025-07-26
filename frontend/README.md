# CodeLab Academy Frontend

Este repositório contém o código-fonte do frontend da aplicação CodeLab Academy. Desenvolvido com Vue 3, TypeScript e Vite, o projeto visa fornecer uma plataforma interativa e eficiente para o aprendizado de programação.

## Visão Geral do Projeto

O frontend da CodeLab Academy é a interface do usuário onde os alunos podem acessar cursos, acompanhar seu progresso e interagir com o conteúdo. Ele foi projetado para ser responsivo, intuitivo e de fácil navegação, garantindo uma experiência de aprendizado otimizada.

## Tecnologias Utilizadas

*   **Vue 3**: Framework progressivo para construção de interfaces de usuário.
*   **TypeScript**: Superset do JavaScript que adiciona tipagem estática, melhorando a robustez e manutenibilidade do código.
*   **Vite**: Ferramenta de build de próxima geração que oferece uma experiência de desenvolvimento extremamente rápida.
*   **Vue Router**: Biblioteca oficial de roteamento para Vue.js, utilizada para gerenciar a navegação entre as diferentes páginas da aplicação.
*   **Material Design Icons**: Conjunto de ícones para uma interface visualmente atraente.
*   **Google Fonts (Lexend)**: Fonte utilizada para o design da aplicação.

## Configuração do Projeto

Para configurar o ambiente de desenvolvimento e rodar o projeto localmente, siga os passos abaixo:

1.  **Clone o repositório**:
    ```bash
    git clone https://github.com/CodeLabDev-Academy/frontend.git
    cd CodeLabDev-Academy/frontend
    ```

2.  **Instale as dependências**:
    ```bash
    npm install
    # ou yarn install
    # ou pnpm install
    ```

## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes scripts:

*   ### `npm run dev`

    Inicia o servidor de desenvolvimento com hot-reload. A aplicação estará disponível em `http://localhost:5173` (ou outra porta disponível).
    ```bash
    npm run dev
    ```

*   ### `npm run build`

    Compila o projeto para produção. Os arquivos de build serão gerados na pasta `dist/`.
    ```bash
    npm run build
    ```

*   ### `npm run preview`

    Serve a versão de produção compilada localmente. Isso é útil para verificar como a aplicação se comportará em um ambiente de produção antes do deploy.
    ```bash
    npm run preview
    ```

## Estrutura de Pastas

*   `public/`: Contém arquivos estáticos que são servidos diretamente.
*   `src/`: Contém o código-fonte principal da aplicação.
    *   `assets/`: Imagens, ícones e outros recursos estáticos.
    *   `components/`: Componentes Vue reutilizáveis.
    *   `views/` ou `pages/`: Componentes de página/rota.
    *   `router/`: Configuração do Vue Router.
    *   `main.ts`: Ponto de entrada da aplicação.
*   `index.html`: O arquivo HTML principal.
*   `package.json`: Metadados do projeto e dependências.
*   `tsconfig.json`: Configurações do TypeScript.
*   `vite.config.ts`: Configurações do Vite.

## Como Contribuir

Contribuições são bem-vindas! Se você deseja contribuir para o projeto, por favor, siga estas diretrizes:

1.  Faça um fork do repositório.
2.  Crie uma nova branch para sua feature (`git checkout -b feature/sua-feature`).
3.  Faça suas alterações e commit (`git commit -am 'feat: Adiciona nova feature'`).
4.  Envie para a branch (`git push origin feature/sua-feature`).
5.  Abra um Pull Request.

Certifique-se de que seu código siga as convenções de estilo do projeto e que todos os testes passem.
