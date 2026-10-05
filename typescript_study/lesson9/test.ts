export {};

const input = document.getElementById("nameInput") as HTMLInputElement;
const btn = document.getElementById('btn') as HTMLButtonElement;
const message = document.getElementById('message') as HTMLParagraphElement;

btn.addEventListener("click",() => {
    message.textContent = `hello ${input.value}さん`;
});