import type { Lesson } from '../types'

const lesson2: Lesson = {
  slug: 'instalando-git',
  title: 'Instalando o Git',
  time: '5 min',
  content: [
    { type: 'title', content: 'Instalando o Git' },
    { type: 'text', content: 'O objetivo desse tutorial é apresentar tudo o que você precisa para começar a usar o <strong>Git</strong>.' },
    { type: 'subtitle', content: '1. Acesse o site oficial' },
    { type: 'text', content:'Vá até <a href="https://git-scm.com/"  style="text-decoration:none; color:blue; font-weight:400;">git-scm.com</a> e clique no botão de download para Windows (ou, se estiver usando Linux ou macOS, clique na versão correspondente — no Linux, você instalará via terminal; no macOS, pode usar o Homebrew).'},
    { type: 'subtitle', content: '2. Execute o instalador' },
    { type: 'text', content: 'Após o download, dê dois cliques no arquivo para iniciar a instalação.'},
    { type: 'important', content: 'No <strong>Linux</strong> e no <strong>macOS</strong>, você não verá um instalador gráfico — tudo será feito por comandos no <strong>terminal</strong>.'},
    { type: 'subtitle', content: '3. Siga o assistente' },
    { type: 'list', content: 'Clique em <strong>Next</strong> em todas as etapas.\nMantenha as <strong>opções padrão</strong> selecionadas.\nClique em <strong>Install</strong> para iniciar.\nNo final, clique em <strong>Finish</strong>.'},
    { type: 'text', content: 'No <strong>Linux</strong>, use o <strong>terminal</strong> e o comando <strong class="code-text">sudo apt install git</strong> ou similar. No <strong>macOS</strong>, use <strong class="code-text">brew install git</strong> se tiver o <strong>Homebrew</strong> instalado.'},
    { type: 'text', content: 'Pronto! O Git está instalado no seu computador.'}  
  ]
}

export default lesson2
