const nameInput = document.querySelector("#nameInput");
const btn = document.querySelector("#btn");
const message = document.querySelector("#message");

btn.addEventListener("click",() => {
    const name = nameInput.value;

    message.textContent = `${name}さん、こんにちは！`

});