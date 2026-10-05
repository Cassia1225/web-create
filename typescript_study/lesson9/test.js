const input = document.getElementById("nameInput");
const btn = document.getElementById('btn');
const message = document.getElementById('message');
btn.addEventListener("click", () => {
    message.textContent = `hello ${input.value}さん`;
});
export {};
