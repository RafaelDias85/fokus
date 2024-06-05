const btnAdicionarTarefa = document.querySelector(".app__button--add-task");
const formAdicionarTarefa = document.querySelector(".app__form-add-task");
const textarea = document.querySelector(".app__form-textarea");

const tarefas = [];

btnAdicionarTarefa.addEventListener("click", () => {
  formAdicionarTarefa.classList.toggle("hidden"); //alternancia dessa Classe (se tem tira, se não tem coloca)
});

formAdicionarTarefa.addEventListener("submit", (evento) => {
  evento.preventDefault(); // impedir comportamento padrao

  const tarefa = {
    descricao: textarea.value,
  };
  tarefas.push(tarefa);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
});
