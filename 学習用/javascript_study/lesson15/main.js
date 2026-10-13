const todoInput = document.querySelector("#todoInput"); 
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

function addTodo() {
    const todo = todoInput.value.trim();

    if (todo === "") {
        return;
    }
    const li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
    todoInput.value = "";

    const deleteBtn = createDeleteButton(li);
    li.appendChild(deleteBtn);
}

function createDeleteButton(li) {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "削除";

    deleteBtn.addEventListener('click',() => {
        li.remove();
    });

    return deleteBtn;
}
addBtn.addEventListener("click",addTodo);

todoInput.addEventListener('keydown',(e) => {
    if (e.key === "Enter") {
        addTodo();
    }
});




