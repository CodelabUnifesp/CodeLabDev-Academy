import type { Lesson } from '../types'

const lesson7: Lesson = {
  slug: 'github-git',
  title: 'GitHub',
  time: '5 min',
  content: [
    { type: 'title', content: 'GitHub'},
    { type: 'subtitle', content:'Para que serve o github?'},
    { type: 'text', content: 'O GitHub é uma plataforma que permite armazenar e versionar projetos de código-fonte. Essa ferramenta facilita o acesso das equipes às novas versões do projeto, possibilitando que pessoas de qualquer lugar do mundo contribuam. No GitHub, também é possível rastrear tarefas, o que ajuda a entender em que ponto o projeto se encontra.'},
    { type: 'text', content: 'Além do mais, o GitHub é usado como uma rede social entre desenvolvedores. Ele pode ser muito útil como portfólio, onde outras pessoas podem ver suas habilidades de desenvolvimento e em quais projetos você está trabalhando.'},
    
    { type: 'subtitle', content: 'Como criar uma conta no GitHub?'},
    { type: 'list', content: 'Acesse o site oficial: <a href="https://github.com/" style="text-decoration:none; color:blue; font-weight:400;">github.com</a> no seu navegador.\nClique em <strong>Sign Up</strong> ou <strong>Inscreva-se</strong>.\nPreencha os seus dados usando seu e-mail pessoal. (não utilize o e-mail institucional)\nConfirme sua conta. Você receberá um e-mail de confirmação no endereço que você forneceu. Verifique a caixa de entrada e siga as instruções para ativar sua conta.\nProntinho!'},
  
    { type: 'subtitle', content: 'Como Criar um Repositório no GitHub?'},
    { type: 'list', content: '\nAcesse o GitHub: Vá até <a href="https://github.com/" style="text-decoration:none; color:blue; font-weight:400;">https://github.com/</a> e faça login com sua conta.\n\nClique em <strong>New repository</strong> na parte superior direita.\nPreencha as informações do repositório:'},
    { type: 'subtext', content:'<strong>Repository name:</strong> Nome do seu repositório. (ex:<strong class="code-text">meu-projeto</strong>)'},
    { type: 'subtext', content:'<strong>Description (opcional):</strong> Breve descrição sobre o projeto.'},
    { type: 'subtext', content:'<strong>Public / Private:</strong> Escolha se o repositório será <strong>público</strong> (qualquer um pode ver) ou <strong>privado</strong>.'},
     { type: 'list', content: '\nClique no botão "Create repository"'},
  ]
}

export default lesson7
