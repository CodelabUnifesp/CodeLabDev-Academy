import type { Lesson } from '../types'

const lesson4: Lesson = {
  slug: 'repositorios-git',
  title: 'Repositórios Git: Local e Remoto',
  time: '5 min',
  content: [
    { type: 'title', content: 'Repositórios Git: Local e Remoto'},
    { type: 'subtitle', content: 'Repositório Local'},
    { type: 'text', content: 'Quando queremos que uma pasta do nosso computador seja gerenciada pelo Git, usamos o comando: <strong class="code-text">git init</strong>'},
    { type: 'text', content: 'Esse comando cria um <strong>repositório local</strong> — ou seja, o Git passa a rastrear as alterações feitas naquela pasta. Ele identifica arquivos criados, modificados ou removidos, permitindo salvar versões específicas do projeto.'},
    { type: 'subtitle', content: 'Repositório Remoto'},
    { type: 'text', content: 'Diferente do repositório local, um <strong>repositório remoto</strong> está armazenado em um servidor (como GitHub, GitLab, Bitbucket). Ele é usado para:'},
    { type: 'list', content: 'Centralizar o código-fonte\nCompartilhar com outros desenvolvedores\nDefinir um ponto de partida comum para o projeto'},
    { type: 'text', content: 'Ao centralizar o código-fonte, definimos um ponto de partida no qual os desenvolvedores tomam como base para realizarem suas tarefas. Essa estrutura é mais organizada pois,  a partir do repositório no servidor, cada membro da equipe pode clonar esse sistema de versionamento para sua máquina local.'},
    { type: 'subtext', content: '&nbsp'},
    { type: 'important', content: 'Isso significa que cada desenvolvedor terá uma <strong>cópia exata do projeto</strong>, incluindo todo o <strong>histórico de commits</strong> — ou seja, todos os registros de alterações feitas no projeto até aquele momento.'},
    { type: 'subtext', content: '&nbsp'},
    { type: 'text', content: 'Com essa cópia local, cada um pode trabalhar de forma independente e, depois, <strong>enviar suas alterações de volta para o servidor</strong> (que normalmente é acessado via URL). Parece difícil? Não se preocupe, o git tem os comandos para fazer cada operação e várias outras mostradas a seguir.'},
  ]
}

export default lesson4
