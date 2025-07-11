import type { Lesson } from '../types'

const lesson5: Lesson = {
  slug: 'comandos-git',
  title: 'Guia Básico de Comandos Git',
  time: '5 min',
  content: [
    { type: 'title', content: 'Guia Básico de Comandos Git'},
    { type: 'text', content: 'Para começar a usar o Git, primeiro abra o terminal <strong>Git Bash</strong>. Em seguida, navegue até a pasta do seu projeto com o comando: <strong class="code-text">cd caminho/da/sua/pasta</strong>'},
    { type: 'text', content: 'Depois, inicialize o repositório Git com:<strong class="code-text">git init</strong>'},
    { type: 'text', content: 'Esse comando cria uma pasta oculta chamada .git dentro da pasta do projeto. É nela que o Git armazena os arquivos de configuração e o histórico de versões.'},
    { type: 'text', content: 'Agora, dentro da pasta do seu projeto, vamos supor que você criou um arquivo chamado<strong class="code-text">index.html</strong>'},
    { type: 'text', content: 'Para ver o status dos arquivos do seu projeto, digite:<strong class="code-text">git status</strong>'},
    { type: 'text', content: 'Você verá que o arquivo está como <strong>untracked</strong>, ou seja, o Git ainda não está monitorando ele. Para começar a versionar esse arquivo, use o comando:<strong class="code-text">git add .</strong>'},
    { type: 'text', content: 'O <strong>ponto (.)</strong> significa que todos os arquivos novos ou modificados serão adicionados ao controle de versão. Verifique novamente o status com:<strong class="code-text">git status</strong>'},
    { type: 'text', content: 'Agora o arquivo <strong class="code-text">index.html</strong> aparecerá em verde, indicando que está pronto para ser "comitado".Um commit salva uma versão do seu projeto, com uma mensagem explicando o que foi feito.'},
    { type: 'text', content: 'Para fazer um commit, digite: <strong class="code-text">git commit -m "Criando o arquivo HTML"</strong>'},
    { type: 'important', content: 'Sempre que for fazer um commit, escreva uma mensagem objetiva que explique o que foi alterado. Isso ajuda a entender melhor o histórico de mudanças do projeto.'},
    { type: 'text', content: 'Para visualizar esse histórico de versões, use: <strong class="code-text">git log</strong>'},
    { type: 'text', content: 'Esse comando mostra todos os commits realizados até o momento no repositório.'},
  ]
}

export default lesson5
