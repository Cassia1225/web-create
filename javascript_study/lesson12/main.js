const li = document.createElement("li");
const todoList = document.querySelector("#todoList");
const button = document.querySelector("#btn");

button.addEventListener('click',() => {
    const todo = document.getElementById('todoInput').trim();
    li.textContent = todo.value;
    todoList.appendChild(li);
});