import type { Lesson } from '../types'

const lesson7: Lesson = {
  slug: 'semantico-html',
  title: 'HTML Semântico',
  time: '5 min',
  content: [
  { type: 'subtitle', content: 'HTML Semântico' },
  { type: 'text', content: 'HTML semântico é o uso de elementos HTML que descrevem o significado do conteúdo que eles contêm, em vez de apenas definir sua apresentação visual. Isso ajuda tanto os desenvolvedores quanto os navegadores e até os mecanismos de busca (como o Google) a entenderem melhor o conteúdo de uma página.' },
  { type: 'subtitle', content: 'Por quê usar HTML Semântico?' },
  { type: 'list', content: 'Melhor acessibilidade: leitores de tela entendem melhor a estrutura da página.\nSEO otimizado: mecanismos de busca para classificar melhor o site.\nCódigo mais organizado e fácil de manter.\nBoas práticas de desenvolvimento.' },

  { type: 'subtitle', content: '<strong>Tags semânticas comuns:</strong>'},
  { type: 'text', content: '<code>&ltheader&gt</code> - Cabeçalho de uma página ou seção'},
  { type: 'text', content: '<code>&ltnav&gt</code> - Navegação'},
  { type: 'text', content: '<code>&ltmain&gt</code> - Conteúdo principal da página'},
  { type: 'text', content: '<code>&ltarticle&gt</code> - Conteúdo independente e reutilizável'},
  { type: 'text', content: '<code>&ltsection&gt</code> - Uma seção de conteúdo'},
  { type: 'text', content: '<code>&ltaside&gt</code> - Conteúdo complementar'},
  { type: 'text', content: '<code>&ltfooter&gt</code> - Rodapé de uma página ou seção'},
  { type: 'text', content: '<code>&ltfigure&gt</code> - Imagem com legenda'},
]
}
export default lesson7
