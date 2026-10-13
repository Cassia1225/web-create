const title = document.getElementById("title");
title.textContent = "こんばんは";
console.log(title.textContent);

const message = document.querySelector(".message");
message.style.fontSize = "30px";
message.classList.add('red-text');
message.classList.remove('red-text');
message.classList.toggle('red-text');

//画像の処理
const image = document.getElementById('image');
image.src = "./a.jpeg";

//linkの処理
const link = document.getElementById('link');
link.href = "https://google.com";