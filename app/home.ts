import { Task } from "./task/task";
import { TaskList } from "./task/taskList";

let taskList: TaskList = new TaskList();

export function init() {
    createInput();
    createTable();
}

export function createInput() {
    let form = document.getElementById('formAdd');
    let inputTask = document.createElement('input');
    inputTask.type = 'text';
    inputTask.className = "form-control";
    inputTask.id = 'inputTask';
    inputTask.placeholder = "digite um nome";
    inputTask.value = '';
    let button = document.createElement('button');
    button.type = 'button';
    button.className = "btn btn-primary mb-2 btn-block";
    button.textContent = "Adicionar";
    button.onclick = () => {
        let task: Task = new Task(inputTask.value, false);
        if(taskList.addTask(task)){
            location.reload(); 
        } else{
            alert('Erro');
        }
    }
    form.appendChild(inputTask);
    form.appendChild(button);
}

export function createTable() {
    let tasks = [];
    tasks = taskList.taskList();
    let table = document.getElementById("tableBody");
    if(tasks && tasks.length > 0){
        tasks.forEach(t => {
            let tRow = document.createElement("tr");
            let tdName = document.createElement('td');
            let tdDone = document.createElement("td");
            let tdAcao = document.createElement("td");
            
            tdName.innerHTML = t.name;
            tdDone.innerHTML = t.done ? 'Sim' : 'Não'

            let deleteButton = document.createElement("button");
            deleteButton.className = "btn btn-danger mb-2 btn-block";
            deleteButton.textContent = "Deletar";
            deleteButton.onclick = () => {
                if (taskList.removeTask(t)) {
                  location.reload();
                }else{
                    alert('Erro');
                }
                
            };

            let setDoneButton = document.createElement("button");
            setDoneButton.className = "btn btn-success mb-2 btn-block";
            setDoneButton.textContent = t.done? 'Desfazer' : 'Pronto';
            setDoneButton.onclick = () => {
                if (taskList.setDone(t)){
                    location.reload(); 
                } else {
                    alert('Erro');
                }
            }

            tdAcao.appendChild(setDoneButton);
            tdAcao.appendChild(deleteButton);
            
            tRow.appendChild(tdName);
            tRow.appendChild(tdDone);
            tRow.appendChild(tdAcao);

            table.appendChild(tRow);

        });
    } else {
        let tRow = document.createElement("tr");
        let tdD = document.createElement('td');
        tdD.colSpan = 3;
        tdD.innerHTML = 'Não há items adicionados';
        tdD.setAttribute('align', 'center');

        tRow.appendChild(tdD);
        table.appendChild(tRow);
    }
    
    
}

init()