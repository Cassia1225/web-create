const todoInput = document.querySelector("#todoInput"); 
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

addBtn.addEventListener("click", () => {
    const todo = todoInput.value.trim();

    if (todo === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
    todoInput.value = "";
});