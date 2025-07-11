import type { Lesson } from '../types'

const lesson6: Lesson = {
  slug: 'branches-e-merge-git',
  title: 'Branches e Merge',
  time: '5 min',
  content: [
    { type: 'title', content: 'Branches e Merge'},
    { type: 'text', content: 'Um <strong>branch</strong> é a forma como o Git separa as diferentes versões ou linhas de desenvolvimento de um projeto. Quando um projeto é iniciado, ele está por padrão no branch <strong>main</strong>. Geralmente na criação de uma nova funcionalidade ou correção de algo, é criado um novo branch para que o desenvolvedor possa trabalhar, para que não seja usada diretamente o branch principal. Ao final do desenvolvimento da tarefa, os branches novos podem ser unidos ao branch principal com o comando <strong>merge</strong>. Isso ajuda a manter o código limpo, evitar conflitos e facilitar o trabalho em equipe.'},
    
    { type: 'subtitle', content: 'Criando e visualizando novos branches'},
    { type: 'list', content: 'Visualizar branches existentes: <strong class="code-text">git branch</strong> \nCriar um novo branch: <strong class="code-text">git branch nome-do-branch</strong>'},
    { type: 'subtext', content: 'Obs: Por padrão, um novo branch é criado a partir do branch atual (geralmente o main).'},
    
    { type: 'subtitle', content: 'Deletando branches'},
    { type: 'list', content: 'Deletar branch: <strong class="code-text">git branch -d nome-do branch</strong> ou <strong class="code-text">git branch --delete nome-do-branch</strong>'},
    { type: 'subtext', content: '&nbsp'},
    { type: 'important', content: '<strong>Atenção:</strong> Apesar de ser possível deletar branches, na prática não é recomendado apagar branches de forma precipitada. Eles guardam o histórico do desenvolvimento, útil para reverter bugs ou revisar código.'},
    { type: 'subtext', content: '&nbsp'},
    
    { type: 'subtitle', content: 'Mudança de branch'},
    { type: 'list', content: 'Mudar de branch: <strong class="code-text">git checkout nome-do-branch</strong>\n Criação e mudança para um novo branch: <strong class="code-text">git checkout -b nome-do-novo-branch</strong>'},
    { type: 'subtext', content: '&nbsp'},
    { type: 'important', content: '<strong>Cuidado:</strong> Se você tiver alterações não salvas (sem commit), elas podem ser levadas para outro branch ao trocar. Sempre faça commit ou stash antes de mudar.'},
    { type: 'subtext', content: '&nbsp'},

    { type: 'subtitle', content: 'União de branches (Merge)'},
    { type: 'list', content: '\nUnião de dois branches: <strong class="code-text">git merge nome-do-branch</strong>'},
    { type: 'text', content: 'Exemplo:'},
    { type: 'subtext', content: '<strong class="code-text">git checkout main</strong> // indo para o branch principal'},
    { type: 'subtext', content: '<strong class="code-text">git merge new-feature</strong> // unindo uma nova funcionalidade ao branch principal'},
    { type: 'text', content: 'O Git irá combinar o histórico das duas branches. Se houver <strong>conflitos</strong>, ele pedirá que você resolva manualmente os trechos afetados.'},

    { type: 'subtitle', content: 'Armazenando alterações temporárias (Stash)'},
    { type: 'text', content: 'O comando <strong  class="code-text">git stash</strong> é usado para salvar temporariamente modificações não commitadas, permitindo que você mude de branch sem perder seu trabalho atual.'},
    { type: 'list', content: '\nSalvar alterações temporárias: <strong  class="code-text">git stash</strong>\nListar stashes salvos: <strong  class="code-text">git stash list</strong>\nRestaurar última stash: <strong  class="code-text">git stash pop</strong>\nAplicar uma stash sem a remover da lista: <strong  class="code-text">git stash apply</strong>'}
  ]
}

export default lesson6
