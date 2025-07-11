import type { Lesson } from '../types'

const lesson3: Lesson = {
  slug: 'configurando-git',
  title: 'Configurando o Git pela primeira vez',
  time: '5 min',
  content: [
    { type: 'title', content: 'Configurando o Git pela primeira vez'},
    { type: 'text', content: 'Agora que o Git está instalado, vamos fazer a configuração inicial. Isso é importante para que suas contribuições sejam identificadas corretamente.' },
    { type: 'subtitle', content: 'Abra o terminal:'},
    { type: 'subtext', content: '<strong>1. No Windows:</strong>'},
    { type: 'subtext', content: 'Clique com o botão direito na área de trabalho ou use a busca do Windows e selecione <strong>Git Bash</strong>.'},
    { type: 'subtext', content: '(Você verá uma janela preta com o título “MINGW64”.)'},
    { type: 'subtext', content: '<strong>No Linux/macOS:</strong>'},
    { type: 'subtext', content: 'Abra o terminal padrão do sistema (geralmente acessado com <strong>Ctrl + Alt + T</strong> no Linux, ou com o Spotlight no macOS).'},
    { type: 'subtext', content: '&nbsp'},
    { type: 'subtext', content: '<strong>2. Configure seu nome de usuário:</strong>'},
    { type: 'subtext', content: 'Digite o comando abaixo e pressione Enter.'},
    { type: 'subtext', content: '&nbsp'},
    { type: 'subtext', content: '<strong class="code-text">git config --global user.name "Seu Nome"</strong>'},
    { type: 'subtext', content: '&nbsp'},
    { type: 'subtext', content: '<strong>3. Configure seu e-mail.</strong>'},
    { type: 'subtext', content: ' Esse e-mail deve ser o mesmo usado no GitHub (não se preocupe, vamos instalar o GitHub mais para frente):'},
    { type: 'subtext', content: '&nbsp'},
    { type: 'subtext', content: '<strong class="code-text">git config --global user.email "seuemail@example.com"</strong>'},
    { type: 'subtext', content: '&nbsp'},
    { type: 'subtext', content: '<strong>4. Verifique se deu tudo certo:</strong>'},
    { type: 'subtext', content: 'Para confirmar suas configurações, digite: '},
    { type: 'subtext', content: '&nbsp'},
    { type: 'subtext', content: '<strong class="code-text">git config --global --list</strong>'},
    { type: 'subtext', content: '&nbsp'},
    { type: 'subtext', content: 'Você verá o nome e o e-mail que acabou de configurar.'},
    { type: 'subtext', content: '&nbsp'},
    { type: 'text', content: 'A configuração que fizemos (<strong>user.name e user.email</strong>) serve para <strong>identificar quem está fazendo as alterações</strong> nos arquivos. Essas informações aparecem em cada commit (registro de modificação), então é importante que estejam corretas — especialmente quando você for trabalhar em grupo ou usar o GitHub.'},
  ]
}

export default lesson3
