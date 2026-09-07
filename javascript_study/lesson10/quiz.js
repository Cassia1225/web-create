const title = document.getElementById("title");
const btn = document.querySelector("#btn");

btn.addEventListener("click",() => {
    title.textContent = "LESSON10完了";
    title.style.color = "green";
})