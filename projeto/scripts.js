// Função que adiciona tarefa
function addTask(){
    
// Título da tarefa
const taskTitle = document.querySelector("#task-title").value;

if (taskTitle){
    // Clona template
    const template = document.querySelector(".template");
    const newTask = template.cloneNode(true);
    console.log(newTask);
    // Adiciona Título
    newTask.querySelector(".task-title").textContent = taskTitle;
    // remover classes desnecessárias
    newTask.classList.remove('template');
    newTask.classList.remove('hide');
    // Adiciona tarefa na lista
    const list = document.querySelector("#task-list");
    list.appendChild(newTask);
    // adicionar evento de remomer
    const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
      removeTask(this);
    });
    // adicionar evento de completar a tarefa
    const doneBtn = document.querySelector(".done-btn").addEventListener("click", function(){
        completeTask(this);
    });
    // Limpar texto
    document.querySelector("#task-title").value = "";
}

} 

// função de remover tarefa
function removeTask(task){
    task.parentNode.remove(true);
}

// Função de completar tarefa
function completeTask(task){
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done");
}
// Evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e){
    e.preventDefault();
    addTask();
});