import type { Lesson } from '../types'

const lesson1: Lesson = {
  slug: 'introducao-html',
  title: 'Introdução',
  time: '5 min',
  content: [
    { type: 'subtitle', content: 'Introdução' },
    { type: 'text', content: '<strong>HTML (HyperText Markup Language)</strong> é a linguagem de marcação usada no desenvolvimento web para estruturar o conteúdo de uma página (hipertextos) — como <strong>textos, imagens, links e botões</strong>. Mais do que apenas organizar o conteúdo visualmente, o HTML também permite atribuir <strong>significado (semântica)</strong> a cada elemento da página.' },
    { type: 'text', content: 'A semântica no HTML define que para cada conteúdo que se deseja colocar no site deve-se atribuir-lhe uma tag HTML correspondente com base na sua função dentro da página — por exemplo, <strong class="code-text">&ltheader&gt</strong> para o cabeçalho, <strong class="code-text">&ltnav&gt</strong> para menus de navegação, <strong class="code-text">&ltarticle&gt</strong>  para textos principais, e assim por diante.'},
    { type:'text', content: 'Uma das principais vantagens do HTML semântico é que ele <strong>informa claramente ao navegador, leitores de tela e motores de busca</strong> qual o papel de cada parte do conteúdo. Isso torna o site mais <strong>acessível, fácil de encontrar em mecanismos de busca e mais compreensível para outros desenvolvedores</strong>.Isso, por sua vez, <strong>melhora a experiência do usuário.</strong>'},
    { type: 'text', content: 'Por exemplo, em um site bem estruturado semanticamente, <strong>um leitor de tela pode informar corretamente que o conteúdo lido é uma “notícia principal” ou uma “barra de navegação”</strong>, em vez de apenas "texto genérico", o que é essencial para pessoas com deficiência visual.'},
  
    { type: 'code_example', 
    content: `&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Minha Página&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Bem-vindo ao HTML!&lt;/h1&gt;
  &lt;p&gt;Esse é um parágrafo de exemplo.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
`},
    
    {type: 'list', content: '<strong class="code-text">&lt!DOCTYPE html&gt</strong> - Informa ao navegador que é um documento HTML5\n<strong class="code-text">&lthtml&gt</strong> - Elemento raiz, envolve todo o conteúdo da página\n<strong class="code-text">&lthead&gt</strong> - Contém informações da página (título, metadados links de estilo etc)\n<strong class="code-text">&lttitle&gt</strong> - Define o nome da aba do navegador\n<strong class="code-text">&ltbody&gt</strong> - Onde vai o conteúdo visível da página (textos, imagens, etc)\n'},

  ]
}


export default lesson1
