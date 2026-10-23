button = document.getElementById("btn");
function handleClick(event) {
    button.textContent = "clickされました。"
    console.log(event.type);
}

button.addEventListener('click',handleClick);