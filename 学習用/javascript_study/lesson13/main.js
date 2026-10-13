const todoInput = document.querySelector("#todoInput"); 
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");


addBtn.addEventListener("click", () => {
    const todo = todoInput.value.trim();

    if (todo === "") {
        return;
    }

    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "削除";
    li.textContent = todo;

    todoList.appendChild(li);
    li.appendChild(deleteBtn);

    todoInput.value = "";

    deleteBtn.addEventListener('click',() => {
        li.remove();
    });
});

