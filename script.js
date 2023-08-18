// Capturando elementos da página pelo ID
const botaoAdicionarTarefa = document.getElementById("botaoAdicionarTarefa");
const entradaTarefa = document.getElementById("entradaTarefa");
const listaTarefas = document.getElementById("listaTarefas");

// Carregando tarefas do LocalStorage ou criando um array vazio
const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
// O que é JSON?

// Função para renderizar as tarefas na página
function renderizarTarefas() {
  listaTarefas.innerHTML = ""; // Limpa a lista de tarefas para evitar duplicação
  tarefas.forEach((tarefa, index) => {
    const itemTarefa = document.createElement("li"); // Cria um elemento <li> para cada tarefa
    itemTarefa.className = "bg-white rounded p-2 flex justify-between"; // Aplica estilos CSS
    itemTarefa.innerHTML = `
      <span>${tarefa}</span>
      <button class="text-red-500 hover:text-red-600 focus:outline-none" data-index="${index}">Remover</button>
    `; // Adiciona o HTML do item da tarefa com botão de remover
    listaTarefas.appendChild(itemTarefa); // Adiciona o item de tarefa à lista
  });
}

// Chama a função para renderizar tarefas ao carregar a página
renderizarTarefas();

// Evento de clique no botão "Adicionar"
botaoAdicionarTarefa.addEventListener("click", () => {
  const textoTarefa = entradaTarefa.value.trim(); // Captura o texto da entrada de tarefa
  if (textoTarefa !== "") {
    // Verifica se o texto não está vazio
    tarefas.push(textoTarefa); // Adiciona a tarefa ao array de tarefas
    localStorage.setItem("tarefas", JSON.stringify(tarefas)); // Salva as tarefas no LocalStorage
    renderizarTarefas(); // Renderiza novamente as tarefas na página
    entradaTarefa.value = ""; // Limpa a entrada de tarefa
  }
});

// Evento de clique na lista de tarefas (delegação de eventos)
listaTarefas.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    // Verifica se o elemento clicado é um botão
    const index = event.target.getAttribute("data-index"); // Obtém o índice da tarefa a ser removida
    tarefas.splice(index, 1); // Remove a tarefa do array de tarefas
    localStorage.setItem("tarefas", JSON.stringify(tarefas)); // Atualiza o LocalStorage
    renderizarTarefas(); // Renderiza novamente as tarefas na página
  }
});
