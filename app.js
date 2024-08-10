var todo = []
var input = document.querySelector("#todolist");
var list = document.querySelector("ol");

function renderTodo(){
    list.innerHTML = '';
    for (var index = 0; index < todo.length; index++) {
    list.innerHTML += `
    <li>
    ${todo[index]}
    <button onclick = "deleteTodo(${index})">Delete</button>
    <button onclick = "editTodo()">Edit</button>
    </li>
    `
    }
}

function addtodo(){
     todo.push(input.value);
     renderTodo();
     input.value = '';
 }

function deleteTodo(index){
    todo.splice(index , 1)
    list.innerHTML = '';
    for (var index = 0; index < todo.length; index++) {
    list.innerHTML += `
    <li>
    ${todo[index]}
    <button onclick = "deleteTodo(${index})">Delete</button>
    <button onclick = "editTodo()">Edit</button>
    </li>
    `
}
}
    todo.splice(index , 1)
    list.innerHTML = '';
    for (var index = 0; index < todo.length; index++) {
    list.innerHTML += `
    <li>
    ${todo[index]}
    <button onclick = "deleteTodo(${index})">Delete</button>
    <button onclick = "editTodo()">Edit</button>
    </li>
    `
}



    function editTodo(){
    var addValue = prompt('enter updated value');
    todo.splice(index,1,addValue)
    for (var index = 0; index < todo.length; index++) {
        list.innerHTML += `
        <li>
        ${todo[index]}
        <button onclick = "deleteTodo(${index})">Delete</button>
        <button onclick = "editTodo()">Edit</button>
        </li>
        `
    }
}