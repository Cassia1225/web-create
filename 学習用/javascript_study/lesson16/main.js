const todoInput = document.querySelector("#todoInput"); 
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");
const savedTodos = localStorage.getItem("todos");
let todos = [];

if (savedTodos !== null) {
    //空でなければデータを取得する。
    todos = JSON.parse(savedTodos);
}

function createCheckbutton() {
    const check = document.createElement("input");
    check.type = "checkbox";

    check.addEventListener('click',() => {
        check.value = "checked";
        renderTodos();
    });
}

function addTodo() {
    const todo = todoInput.value.trim();

    if (todo === "") {
        return;
    }

    todos.push(todo);
    saveTodos();
    renderTodos();

    todoInput.value = "";
}

function createDeleteButton(index) {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "削除";

    deleteBtn.addEventListener('click',() => {
        todos.splice(index,1);
        saveTodos();
        renderTodos()
    });

    return deleteBtn;
}
addBtn.addEventListener("click",addTodo);

todoInput.addEventListener('keydown',(e) => {
    if (e.key === "Enter") {
        addTodo();
    }
});

function saveTodos() {
    localStorage.setItem("todos",JSON.stringify(todos));
}

function renderTodos() {
    todoList.innerHTML = "";

    todos.forEach((todo,index) => {
        const li = document.createElement("li");
        li.textContent = todo;

        const deleteBtn = createDeleteButton(index);
        const check = createCheckbutton();
        li.appendChild(check);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

//ここが起点になる。
renderTodos();



