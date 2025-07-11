import type { Lesson } from '../types'

const lesson2: Lesson = {
  slug: 'elementos-e-atributos-html',
  title: 'Elementos e Atributos',
  time: '5 min',
  content: [
    { type: 'subtitle', content: 'Elementos' },
    { type: 'text', content: 'Elementos HTML são os blocos que compõem o conteúdo de uma página web. Cada elemento é formado,geralmente, por:'},
    { type: 'list', content: 'uma <strong>tag de abertura</strong>.\num <strong>conteúdo</strong>.\ne uma <strong>tag de fechamento</strong>.'},
    { type: 'code_example', content: '&lth1&gtBem-vindo ao HTML!&lt/h1&gt'},
    { type: 'text', content: 'Esse é um elemento de título principal (<strong class="code-text">h1</strong>). Vamos entender suas partes:'},
    { type: 'list', content: '<strong class="code-text">&lt/h1&gt</strong>: <strong>Tag de abertura</strong> – indica o início de um título de nível 1 \n<strong class="code-text">Bem-vindo ao HTML!</strong> <strong>Conteúdo</strong> – o texto que será exibido na página \n<strong class="code-text">&lt/h1&gt</strong> <strong>Tag de fechamento</strong> – indica o fim do elemento <strong class="code-text">h1</strong>'},
    { type: 'text', content: 'O navegador interpreta esse elemento como um <strong>título importante</strong> da página e o renderiza em tamanho grande por padrão.'},
    { type: 'text', content: 'Nem todos os elementos HTML têm tag de fechamento. Alguns são chamados de <strong>elementos vazios</strong>, como<strong class="code-text">&ltimg /&gt</strong>e também<strong class="code-text">&ltbr /&gt</strong>. Mas a maioria segue o modelo <strong>abertura → conteúdo → fechamento</strong>.'},
  
    { type: 'subtitle', content: 'Elementos de conteúdo'},
    { type: 'text', content: 'No HTML existem diversos elementos para organizar semanticamente o texto. Como mencionado anteriormente, o elemento <strong class="code-text">&lth1&gt</strong> é utilizado para definir o <strong>título principal</strong> de uma página. Porém, o HTML oferece uma <strong>estrutura hierárquica completa de títulos</strong>, que vai do <strong class="code-text">&lth1&gt</strong> ao <strong class="code-text">&lth6&gt</strong> para estruturar o texto numa página. Basicamente a lógica é com que cada incremento de nível descemos um nível de profundidade no texto. Ou seja:'},
    { type: 'list', content: '<strong class="code-text">&lth1&gt </strong> Título principal da página \n <strong class="code-text">&lth2&gt </strong> Subtítulo ou seção \n <strong class="code-text">&lth3&gt </strong> Subseção de um  <strong class="code-text">&lth2&gt </strong> \n <strong class="code-text">&lth4&gt </strong> Sub-subseção \n <strong class="code-text">&lth5&gt </strong> Nível menos usado, conteúdo auxiliar \n <strong class="code-text">&lth6&gt </strong> Nível mais profundo (raro de usar)'},

    { type: 'text', content: 'Outros tipos de elementos de texto:'},
    { type: 'list', content: '<strong class="code-text">&ltp&gt</strong>Ao utilizar parágrafo na página \n<strong class="code-text">&ltbr&gt</strong>Ao induzir uma quebra de linha no texto\n<strong class="code-text">&ltstrong&gt</strong> Dar ênfase em uma parte do texto \n<strong class="code-text">&ltspan&gt</strong> Marca um trecho de texto para aplicar estilo ou lógica sem quebrar a linha'},

    { type: 'subtitle', content: 'Atributos'},
    { type: 'text', content: 'Os <strong>atributos</strong> em HTML são parâmetros <strong>adicionais</strong> que podem ser inseridos nas <strong>tags</strong> para configurar ou modificar o comportamento dos elementos.'},
    { type: 'text', content: 'Eles sempre aparecem <strong>dentro da tag de abertura</strong>, e seguem a estrutura:'},
    { type: 'code_example', content: '&lttag atributo="valor"&gtconteúdo&lt/tag&gt'},
    { type: 'list', content: '<strong class="code-text">href</strong> Define o link de destino em <strong class="code-text">&lta&gt</strong> \n<strong class="code-text">id</strong> Identificador único de um elemento \n<strong class="code-text">title</strong> Texto que aparece ao passar o mouse'},
    { type: 'subtext', content: 'Você pode colocar vários atributos em uma mesma tag. Basta separá-los com espaço:'},
    { type: 'subtext', content: '<strong class="code-text">&ltimg src="logo.png" alt="Logo da empresa" width="200" /&gt</strong>'},

    { type: 'subtitle', content: 'Imagens no HTML'},
    { type: 'text', content: 'O HTML oferece o elemento img como forma de adicionar imagens no nosso site. Como vimos anteriormente ele é composto pela  tag <strong class="code-text">&ltimg/&gt</strong>, ou seja, é um elemento vazio, não possuindo tag de fechamento nem uma área de conteúdo.'},

    { type: 'list', content: '<strong class="code-text">src</strong>Define a fonte de imagem em &ltimg&gt\n<strong class="code-text">alt</strong>Texto alternativo para imagens (acessibilidade)\n<strong class="code-text">width</strong>Define a largura da imagem\n<strong class="code-text">height</strong>Define a altura da imagem\n'},
    { type: 'subtext', content: '<strong class="code-text">&ltimg src="logo.png" alt="Logo da empresa" width="200" /&gt</strong>'},
    { type: 'text', content: 'Nesse exemplo <strong class="code-text">src</strong> refere-se ao arquivo que usaremos como base para renderizar a imagem, <strong class="code-text">alt</strong> refere-se a um texto alternativo explicando do que se trata a imagem, muitas vezes usado para acessibilidade, <strong class="code-text">width</strong> define a largura em pixels da imagem '},
    
  ]
}


export default lesson2
