import type { Lesson } from '../types'

const lesson4: Lesson = {
  slug: 'tabelas-html',
  title: 'Tabelas no HTML',
  time: '5 min',
  content: [
    { type: 'text', content: 'Se deseja adicionar alguma tabela no seu site existem algumas tags úteis que podem te auxiliar.'},
    { type: 'list', content: '<strong class="code-text">&lt;table&gt;</strong> É a tabela em si, dentro dela aninhamos tags auxiliarem para compor a tabela semanticamente.\n<strong class="code-text">&lt;tr&gt;</strong> É a criação de uma linha da tabela, podemos usar ela tanto para definir uma linha do cabeçalho da tabela quanto para definir o corpo da tabela com os próprios dados como conteúdo.\n<strong class="code-text">&lt;th&gt;</strong> Deve estar dentro de uma tag <strong class="code-text">&lt;tr&gt;</strong>Para cada <strong class="code-text">&lt;th&gt;</strong> numa linha, adiciona uma célula de cabeçalho com um rótulo na linha. \n<strong class="code-text">&lt;td&gt;</strong> Deve estar dentro de uma tag <strong class="code-text">&lt;tr&gt;</strong>Para cada <strong class="code-text">&lt;td&gt;</strong> numa linha, adiciona uma célula de dados para a respectiva coluna de cabeçalho na tabela.'},
    { type: 'code_example', content: `&lt;table&gt;
&lt;tr&gt;
  &lt;th&gt;Nome&lt;/th&gt;
  &lt;th&gt;Idade&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
  &lt;th&gt;Ana&lt;/th&gt;&lt;th&gt;25&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
  &lt;th&gt;João&lt;/th&gt;&lt;th&gt;30&lt;/th&gt;
&lt;/tr&gt;
&lt;/table&gt;`},
    { type: 'text', content: 'Esse código produz o seguinte resultado:'},
    { type: 'table', content: {
    headers: ['Nome', 'Idade'],
    rows: [
      ['Ana', '25'],
      ['João', '35'],
    ],
    caption: 'Exemplo de uma tabela em HTML'
  }},
    { type:'important', content:'Essa tabela possuí estilo com CSS. Tabelas puramente em HTML ficarão com uma aparencia diferente.' }

]
}


export default lesson4
