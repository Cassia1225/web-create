const title = document.querySelector("#title");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    console.log("クリック発火");
    title.textContent = "hello";
    title.style.color = "cyan";

});
    

btn.addEventListener("mouseover", () => {
    console.log("mouse発火");
    title.textContent = "こんばんは";
});
