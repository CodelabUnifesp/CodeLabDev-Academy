import type { Lesson } from '../types'

const lesson6: Lesson = {
  slug: 'formularios-html',
  title: 'Como funciona os formulários no html',
  time: '5 min',
  content: [
    { type: 'subtitle', content: 'Como funciona os formulários no html' },
  { type: 'text', content: '<strong>Formulários HTML</strong> são estruturas que permitem a <strong>interação direta entre o usuário e uma página web</strong>. Eles são usados para coletar informações — como textos, escolhas, arquivos ou qualquer outro dado — e, normalmente, enviá-las para um servidor.' },
  { type: 'text', content: 'Um formulário é essencial, por exemplo, em situações como:' },
  { type: 'list', content: 'Login em um sistema\nCadastro de usuário\nPesquisa ou filtro de conteúdo\nEnvio de mensagens ou comentários'},
  { type: 'text', content: 'Vamos fazer um formulário simples como exemplo.'},
  { type: 'text', content: 'O nosso formulário terá três campos de texto e um botão. Basicamente, pedimos ao usuário o seu nome, seu e-mail e a mensagem que deseja enviar. Ao apertar o botão apenas irá enviar os dados para o servidor web.' },
  { type: 'text', content: 'Um formulário é criado com a tag <code>&lt;form&gt;</code> e dentro dela colocamos os elementos de entrada, como campos de texto, botões, caixas de seleção, etc.' },
  
  { type: 'subtitle', content: 'Atributos principais da tag <code>&lt;form&gt;</code>' },
  { type: 'list', content: '<strong>action</strong>: Define para onde os dados serão enviados (uma URL ou um arquivo no servidor).\n<strong>method</strong>: Define como os dados serão enviados. Os dois métodos mais usados são:' },
  { type: 'subtext', content: '- <code>get</code>: envia os dados pela URL (não é seguro para dados sensíveis).' },
  { type: 'subtext', content: '- <code>post</code>: envia os dados de forma oculta no corpo da requisição (mais seguro)' },
  { type: 'subtext', content: '&nbsp'},

  { type: 'code_example', content: `&lt;form action="/pagina-processa-dados-do-form" method="post"&gt;
  &lt;div&gt;
    &lt;label for="nome"&gt;Nome:&lt;/label&gt;
    &lt;input type="text" id="nome" /&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;label for="email"&gt;E-mail:&lt;/label&gt;
    &lt;input type="email" id="email" /&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;label for="msg"&gt;Mensagem:&lt;/label&gt;
    &lt;textarea id="msg"&gt;&lt;/textarea&gt;
  &lt;/div&gt;
&lt;/form&gt;` },
  
  { type: 'text', content: 'O atributo <code>action="/pagina-processa-dados-do-form"</code> indica o <strong>endereço do servidor</strong> que vai receber os dados do formulário.' },
  { type: 'text', content: 'O atributo <code>method="post"</code> indica que os dados serão enviados usando o método <strong>POST</strong>, ou seja, de forma segura e invisível na URL.' },
  { type: 'text', content: 'Vamos explicar o código por partes:' },
  { type: 'text', content: '<code>&lt;label&gt;</code> associa um texto descritivo ao campo de entrada. O atributo <code>for="nome"</code> deve ser igual ao <code>id</code> do campo correspondente.' },
  { type: 'text', content: '<code>&lt;input type="text"&gt;</code> cria um <strong>campo de texto simples</strong>, onde o usuário digita o nome.' },
  
  { type: 'code_example', content: `&lt;label for="nome"&gt;Nome:&lt;/label&gt;
&lt;input type="text" id="nome" /&gt;<` },
  
  { type: 'text', content: 'O campo usa <code>type="email"</code>, o que ajuda a validar se o valor inserido parece um e-mail (como exemplo@dominio.com).' },
  
  { type: 'code_example', content: `&lt;label for="email"&gt;E-mail:&lt;/label&gt;
&lt;input type="email" id="email" /&gt;</code>` },
  
  { type: 'text', content: 'A tag <code>&lt;textarea&gt</code> cria um <strong>campo de texto com várias linhas</strong>, ideal para o usuário escrever uma mensagem mais longa.' },
  
  { type: 'code_example', content: `&lt;label for="msg"&gt;Mensagem:&lt;/label&gt;
&lt;textarea id="msg"&gt;&lt;/textarea&gt;` },
  
  { type: 'text', content: 'Como o formulário ainda <strong>não possui um botão de envio</strong> (<code>&lt;input type="submit"&gt;</code> ou <code>&lt;button type="submit"&gt;</code>). Para que os dados sejam enviados ao servidor, é necessário adicionar esse botão ao final do formulário:' },
  
  { type: 'code_example', content: `&lt;div&gt;
 &lt;input type="submit" value="Enviar" /&gt;
&lt;/div&gt;` }
]
}

export default lesson6
