import type { Lesson } from '../types'
import unordered_list from '../../../assets/html-examples/unordered-list.png'
import ordered_list from '../../../assets/html-examples/ordered-list.png'
import start_ordered_list from '../../../assets/html-examples/ordered-list-start.png'
import description_list from '../../../assets/html-examples/description-list.png'

const lesson3: Lesson = {
  slug: 'listas-html',
  title: 'Listas no HTML',
  time: '5 min',
  content: [
    { type: 'subtitle', content: 'Listas no HTML' },
    { type: 'text', content: 'Ao desenvolver páginas web, muitas vezes precisamos organizar informações em listas, como nomes, números ou documentos. O HTML oferece elementos próprios para isso, permitindo criar listas ordenadas, não ordenadas ou de descrições. Por padrão, essas listas são exibidas com números ou marcadores que indicam seus itens, facilitando a leitura e a estruturação do conteúdo.'},
    { type: 'text', content: 'Mesmo quando não queremos que as listas tenham a aparência tradicional — como em barras de navegação, listas de tarefas com caixas de seleção ou perguntas de verdadeiro ou falso —, ainda assim usamos elementos de lista HTML para manter a organização e a semântica correta do código. Assim, conhecer e saber aplicar as listas em HTML é essencial para criar páginas mais estruturadas, acessíveis e funcionais.'},

    { type: 'subtitle', content: 'Listas não Ordenadas'},
    { type: 'text', content: 'O elemento <strong class="code-text">&ltul&gt</strong> é utilizado para criar listas não ordenadas, onde a sequência dos itens não é importante. Dentro de uma <strong class="code-text">&ltul&gt</strong>, devem existir apenas elementos <strong class="code-text">&ltli&gt</strong>, que representam cada item da lista.'},
    { type: 'text', content: 'Como exemplo, podemos criar uma lista de compras. Nesse caso, escolhemos uma lista não ordenada justamente porque a ordem dos itens não influencia.'},
    { type: 'text', content: 'Por padrão, cada item dessa lista aparece com um marcador (bullet). O elemento <strong class="code-text">&ltul&gt</strong> não possui atributos específicos e, como em todas as listas, é importante lembrar de fechá-la corretamente com <strong class="code-text">&lt/ul&gt</strong>.'},
    { type: 'image', content: { src: unordered_list, alt: 'Exemplo de uma lista não ordenada em HTML com os elementos: arroz, feijão, carne', caption: 'Exemplo de uma lista não ordenada em HTML'}},

    { type: 'subtitle', content: 'Listas Ordenadas'},
    { type: 'text', content: 'Uma lista ordenada utiliza números ou outro tipo de notação para indicar uma sequência de itens. Por exemplo, ela pode começar com o número 1 e seguir com 2, 3, 4, e assim por diante. Também é possível que a lista inicie com a letra A, continuando com B, C, D, entre outras.'},
    { type: 'text', content: 'Em uma lista ordenada, os itens devem ser definidos dentro das tags <strong class="code-text">&ltol&gt</strong> e <strong class="code-text">&lt/ol&gt</strong>. Cada item da lista é representado utilizando as tags <strong class="code-text">&ltli&gt</strong> e <strong class="code-text">&lt/li&gt</strong>, que delimitam o conteúdo de cada elemento da lista.'},
    { type: 'text', content: 'Se você não quiser que sua lista seja ordenada por números, pode optar por ordená-la usando letras, como A, B, C ou a, b, c, por exemplo. Para isso, basta definir o valor do atributo <strong class="code-text">type</strong> na tag <strong class="code-text">&ltol&gt</strong>.'},
    { type: 'text', content: 'Da mesma forma, é possível usar letras minúsculas definindo o valor <strong class="code-text">a</strong> no atributo <strong class="code-text">type</strong>, fazendo com que os itens sejam listados como a, b, c e assim por diante.'},
    { type: 'text', content: 'Se preferir utilizar algarismos romanos, basta definir o valor <strong class="code-text">I</strong> no atributo <strong class="code-text">type</strong> para que a lista seja ordenada com numerais como I, II, III, etc'},
    { type: 'image', content: { src: ordered_list, alt: 'Exemplo de duas listas ordenadas em HTML. Uma com os elementos: 1.arroz, 2.feijão, 3.carne e outra com os elementos: A.arroz, B.feijão, C.carne', caption: 'Exemplo de uma lista ordenada em HTML'}},
    
    { type: 'subtitle', content: 'Como utilizar o atributo start em listas HTML'},
    { type: 'text', content: 'O elemento <strong class="code-text">&ltol&gt</strong> possui um atributo útil chamado <strong class="code-text">start</strong>, que permite definir a partir de qual número a lista ordenada deve começar. Por exemplo, se você quiser que a lista inicie pelo número 20, em vez de começar pelo padrão que é 1, basta atribuir o valor 20 ao atributo <strong class="code-text">start</strong>.'},
    { type: 'image', content: { src: start_ordered_list, alt: 'Exemplo de uma lista ordenada em HTML com os elementos: 20.Vinte, 21.Vinte um, 22.Vinte doise', caption: 'Exemplo de uma lista ordenada iniciada no valor 20 em HTML'}},

    { type: 'subtitle', content: 'Você sabia que também existe um tipo de lista chamada lista de descrição?'},
    { type: 'text', content: 'Embora não seja tão utilizada quanto as listas ordenadas ou não ordenadas, a lista de descrição é mais um recurso disponível no HTML. Ela é criada com a tag <strong class="code-text">&ltdl&gt</strong>. Dentro dela, usamos a tag <strong class="code-text">&ltdt&gt</strong> para definir o termo, que geralmente é uma palavra ou expressão a ser explicada. Em seguida, utilizamos a tag <strong class="code-text">&ltdd&gt</strong> para fornecer a descrição ou explicação desse termo.'},
    { type: 'text', content: 'Pode parecer muita coisa, mas tudo fica mais simples com um exemplo. Imagine que queremos descrever informações sobre "programação", "fofoca" e "sono" em nossa página. Para isso, criamos a tag <strong class="code-text">&ltdl&gt</strong> e, dentro dela, três pares de <strong class="code-text">&ltdt&gt</strong> e <strong class="code-text">&ltdd&gt</strong> para apresentar cada termo e sua respectiva descrição.'},
    { type: 'image', content: { src: description_list, alt: 'Uma imagem com uma demonstração de lista de descrição', caption: 'Um exemplo de lista de descrição'}},
    
  
  ]
}


export default lesson3
