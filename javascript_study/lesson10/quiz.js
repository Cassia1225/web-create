const nameinput = document.querySelector("#nameinput");
const btn = document.querySelector("#btn");
const message = document.querySelector("#message");



btn.addEventListener('click',() => {

    const name = nameinput.value.trim();

    if (name === "") {
        message.textContent = "名前を入力してください";
    }
    else {
        message.textContent = `${name}さん、ようこそ！`;
    }
});