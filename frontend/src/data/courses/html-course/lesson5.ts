import type { Lesson } from '../types'

const lesson5: Lesson = {
  slug: 'links-e-navegacao-html',
  title: 'Links e Navegação',
  time: '5 min',
  content: [
    { type: 'subtitle', content: 'O que é um link?' },
    { type: 'text', content: 'Um link é uma ligação entre páginas web, podendo esta ligação ser para uma página no mesmo site (link interno) ou para uma página em outro site.' },
    { type: 'subtitle', content: 'Como criar um link' },
    { type: 'text', content: 'Para criarmos um link em HTML, utilizamos a tag <code>&lt;a&gt;</code>. No entanto, se essa tag for usada sem nenhum atributo, ela não terá nenhuma funcionalidade — ou seja, não criará um link. Para que o link funcione, é necessário, no mínimo, incluir o atributo <code>href</code>, que indica o destino do link, podendo ser um endereço absoluto (como uma URL completa) ou relativo (um caminho dentro do próprio site).' },
    { type: 'text', content: ' '},
    { type: 'text', content: 'Exemplo prático para o site do youtube:'},
    { type: 'code_example', content: '&lt;a href="https://www.youtube.com"&gt;Acesse o YouTube&lt;/a&gt;' },
    { type: 'text', content: 'Se você deseja criar links entre páginas de um mesmo site, não é necessário utilizar o endereço completo (absoluto) como no exemplo anterior. Basta usar um caminho relativo — ou seja, um caminho baseado na estrutura de pastas do seu próprio site.' },
    { type: 'text', content: 'Por exemplo, se você tem duas páginas chamadas <code>pagina1.html</code> e <code>pagina2.html</code>, e ambas estão na mesma pasta, você pode criar um link de pagina1.html para pagina2.html assim:' },
    { type: 'code_example', content: '&lt;a href="pagina2.html"&gt;Link para a página 2&lt;/a&gt;' },
    { type: 'text', content: 'Agora, se pagina2.html estiver dentro de uma subpasta chamada pasta, o link a partir de <code>pagina1.html</code> será escrito da seguinte forma:' },
    { type: 'code_example', content: '&lt;a href="pasta/pagina2.html"&gt;Link para a página 2&lt;/a&gt;' },
    { type: 'text', content: 'Por outro lado, se você estiver em pagina2.html, que está dentro da pasta pasta, e quiser voltar para <code>pagina1.html</code> (que está um nível acima), o link será:' },
    { type: 'code_example', content: '&lt;a href="../pagina1.html"&gt;Voltar para a página 1&lt;/a&gt;' },

    { type: 'text', content: 'A notação <code>../</code> significa "voltar um nível na estrutura de pastas". Se for necessário voltar dois níveis, você pode usar <code>../../</code>, e assim por diante, conforme a profundidade da pasta em que você está.' },
    { type: 'text', content: 'Além do atributo <code>href</code>, também podemos utilizar outros dois atributos importantes ao criar um link com a tag <code>&lt;a&gt;</code>: o <code>title</code> e o <code>target</code>.' },
    { type: 'subtitle', content: 'title' },
    { type: 'text', content: 'O atributo <code>title</code> permite adicionar um texto descritivo ao link. Esse texto é exibido como uma dica (tooltip) quando o usuário passa o mouse sobre o link, ajudando a entender melhor para onde ele será levado.' },
    { type: 'code_example', content: '&lt;a href="https://www.youtube.com" title="Ir para o site do YouTube"&gt;Visite o YouTube&lt;/a&gt;' },
    { type: 'text', content: 'Neste caso, ao passar o mouse sobre o link, será exibido o texto: "Ir para o site do YouTube".' },
    { type: 'subtitle', content: 'target' },
    { type: 'text', content: 'O atributo <code>target</code> define onde a página será aberta ao clicar no link. O valor mais comum é:' },
    { type: 'text', content: '<code>_blank</code> – Abre o link em uma nova aba ou janela do navegador.' },
    { type: 'code_example', content: '&lt;a href="https://www.youtube.com" target="_blank"&gt;Abrir YouTube em nova aba&lt;/a&gt;' },
    { type: 'text', content: 'Esse link abrirá o YouTube em uma nova aba, mantendo a página atual aberta.' },

    { type: 'subtitle', content: 'Juntando tudo' },
    { type: 'text', content: 'Podemos usar os três atributos juntos para criar um link mais completo e amigável:' },
    { type: 'code_example', content: '&lt;a href="https://www.youtube.com" title="Ir para o YouTube" target="_blank"&gt;Acesse o YouTube&lt;/a&gt;' },
    { type: 'subtitle', content: 'Âncoras em HTML' },
    { type: 'text', content: 'Além de criar links para outras páginas, também é possível criar <strong>links internos</strong>, ou seja, links que levam o usuário para uma <strong>seção específica dentro da mesma página</strong>. Esse recurso é conhecido como <strong>âncora</strong>.' },
    { type: 'text', content: 'Para isso, utilizamos dois elementos principais:' },
    { type: 'list', content: 'O atributo <code>id</code>, que identifica o local de destino na página.\nO símbolo <code>#</code>, que no <code>href</code> indica que o link será interno.' },
    { type: 'subtitle', content: 'Como funciona?' },
    { type: 'text', content: 'Primeiro, marcamos o elemento de destino com um <code>id</code> único. Por exemplo:' },
    { type: 'code_example', content: '&lt;h1 id="secao1"&gt;Seção 1&lt;/h1&gt;' },
    { type: 'text', content: 'Em seguida, criamos um link usando a tag <code>&lt;a&gt;</code>, e no atributo <code>href</code> colocamos <code>#</code> seguido do nome do <code>id</code>:' },
    { type: 'code_example', content: '&lt;a href="#secao1"&gt;Ir para a Seção 1&lt;/a&gt;' },
    { type: 'text', content: 'Quando o usuário clica nesse link, o navegador irá rolar a página até encontrar o elemento com o <code>id="secao1"</code>.' }
 
]
}


export default lesson5
