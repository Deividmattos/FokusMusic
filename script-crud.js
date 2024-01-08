// encontrar o botao adicionar tarefa

const btnAdicionarTarefa = document.querySelector('.app__button--add-task')
const adicionarTarefa = document.querySelector('.app__form-add-task')
const textarea = document.querySelector('.app__form-textarea')

const tarefas = [];

btnAdicionarTarefa.addEventListener('click', () => {
      adicionarTarefa.classList.toggle('hidden')
})

adicionarTarefa.addEventListener('submit', (evento) => {
      evento.preventDefault();
      const descricaoTarefa = textarea.value
      const tarefa = {
            descricao:textarea.value 
      }
      tarefas.push(tarefa)
      localStorage.setItem('tarefas', JSON.stringify(tarefas))
});