const button = document.querySelector("button");
const tarefas = document.querySelector(".tarefas");

button.addEventListener("click", function() {
  const li = document.createElement("li");
  li.innerHTML = `
    <h2>Nova Tarefa</h2>
    <p>Prioridade: Baixa</p>
    <p>Prazo: 01/01/2024</p>
    <button class="editar">Editar</button>
    <button class="excluir">Excluir</button>
  `;
  tarefas.appendChild(li);
});

tarefas.addEventListener("click", function(event) {
  if (event.target.className == "editar") {
    const h2 = event.target.parentElement.querySelector("h2");
    const prioridade = event.target.parentElement.querySelector("p:nth-of-type(1)");
    const prazo = event.target.parentElement.querySelector("p:nth-of-type(2)");
    const novaTarefa = prompt("Digite o nome da tarefa:", h2.innerText);
    const novaPrioridade = prompt("Digite a prioridade da tarefa:", prioridade.innerText.split(": ")[1]);
    const novoPrazo = prompt("Digite o prazo da tarefa:", prazo.innerText.split(": ")[1]);
    h2.innerText = novaTarefa;
    prioridade.innerText = `Prioridade: ${novaPrioridade}`;
    prazo.innerText = `Prazo: ${novoPrazo}`;
  } else if (event.target.className == "excluir") {
    const li = event.target.parentElement;
    tarefas.removeChild(li);
  }
});
