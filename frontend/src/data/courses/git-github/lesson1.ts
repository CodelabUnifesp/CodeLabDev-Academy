import type { Lesson } from '../types'

const lesson1: Lesson = {
  slug: 'versionamento-de-codigo',
  title: 'Versionamento de Código',
  time: '5 min',
  content: [
    { type: 'subtitle', content: 'Exemplo Intuitivo' },
    { type: 'text', content: 'Imagine que você está jogando um jogo e, de repente, comete um erro que pode comprometer tudo.' },
    { type: 'text', content: 'A solução? Voltar para um <strong>save</strong> anterior.' },
    { type: 'text', content: 'No desenvolvimento de software, o conceito é o mesmo. À medida que criamos uma aplicação (web, desktop, etc.), escrevemos código para resolver uma demanda. Quando o código está funcionando corretamente, podemos <strong>salvar esse estado</strong> — e voltar a ele se algo der errado no futuro.'},
    { type: 'text', content: 'Um <strong>commit</strong> é como um "salvamento" no desenvolvimento. Ele registra um conjunto de alterações no código, junto com uma mensagem descritiva e dados como autor e data.' },
    { type: 'text', content: 'Esse processo é chamado de <strong>versionamento de código</strong>.' },
    { type: 'subtitle', content: 'Versionamento de Código' },
    { type: 'text', content: 'Versionamento de código é o processo de rastrear, registrar e gerenciar as alterações feitas no código-fonte ao longo do tempo. Ele é útil para:' },
    { type: 'list', content: 'Para acompanhar o histórico de alterações.\nPara restaurar versões anteriores do projeto.\nPara colaborar de forma segura com outras pessoas.' },
    { type: 'subtitle', content: 'Vantagem' },
    { type: 'list', content: '<strong>Histórico de alterações</strong>: Permite ver o que mudou, quando e por quem.\n<strong>Recuperação de versões anteriores:</strong> Reverte facilmente para estados anteriores do código.\n<strong>Trabalho em equipe:</strong> Suporte para colaboração com múltiplos desenvolvedores.\n<strong>Testes e experimentações seguras:</strong> Criação de branches para testar novas ideias sem afetar o código principal.\n<strong>Auditoria e rastreabilidade:</strong> Facilita o entendimento da evolução do projeto.' },
    { type: 'important', content: 'Existem várias ferramentas que oferecem versionamento de código. Neste material, vamos focar no <strong>Git</strong> pois é o sistema de controle de versão mais usado atualmente.' },
  ]
}


export default lesson1
