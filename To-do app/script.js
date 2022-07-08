// const todosA = ['Take out the trash','Mow Lawn','Shower'];
const list = document.getElementById('todo-list');
const text = document.getElementById('text');
const addTodo = document.getElementById('addTodo');
const saveTodo = document.getElementById("saveTodo");


addTodo.addEventListener('click',(e)=>{
    e.preventDefault();
    let todos = localStorage.getItem('todos');

    if (todos === null) {
        todosArray = [];
    } else {
        todosArray = JSON.parse(todos);
    }

    if (text.value === '') {
        alert('Cannot insert empty task');
    } else{
        todosArray.push(text.value);
        text.value = "";
    }
      
      localStorage.setItem("todos", JSON.stringify(todosArray));
    //   displayTodo();

    // localStorage.clear();
    
    //   console.log(todos)
      displayTodos();
});

displayTodos();

function displayTodos() {
    let todos = localStorage.getItem('todos');

    if (todos === null) {
        todosArray = [];
    } else {
        todosArray = JSON.parse(todos);
    }

    let htmlCode ='';
    todosArray.forEach((todo,ind) => {
        htmlCode += `
        <div class="list-item">
            <p id="taskText${ind}">${todo}</p>
            <div class="list-buttons">
                <button onclick='done(${ind})' class="btn btn-success"  type="button">
                    <i class="bi bi-check2-all"></i></button>
                <button onclick='edit(${ind})' class="btn btn-primary" type="button"><i class="bi bi-pen"></i></button>
                <button onclick='deleteTodo(${ind})' class="btn btn-danger" type="button"><i class="bi bi-trash3"></i></button>
            </div>
        </div>`;
    });
    list.innerHTML = htmlCode;
}

function deleteTodo(ind) {
    let todo = localStorage.getItem('todos');
    todosArray = JSON.parse(todo);
    todosArray.splice(ind,1);

    localStorage.setItem('todos', JSON.stringify(todosArray));
    displayTodos();
    // console.log(`${ind} has been deleted`)
}

function edit(ind) {
    saveTodo.value = ind;

    let todo = localStorage.getItem('todos');
    todosArray = JSON.parse(todo);
    text.value = todosArray[ind];

    addTodo.style.display = 'none';
    saveTodo.style.display = 'block';
}
function done(ind) {

    let todo = localStorage.getItem('todos');
    todosArray = JSON.parse(todo);
    
    let taskText = document.getElementById(`taskText${ind}`);
    taskText.style.textDecoration = 'line-through';
}

saveTodo.addEventListener('click',()=>{
    let todo = localStorage.getItem('todos');
    todosArray = JSON.parse(todo);

    let id = saveTodo.value;

    todosArray[id] = text.value;
    addTodo.style.display = 'block';
    saveTodo.style.display = 'none';

    text.value = "";
    localStorage.setItem('todos', JSON.stringify(todosArray));
    displayTodos();
})