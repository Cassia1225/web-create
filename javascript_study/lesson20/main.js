import {getUser} from "./api.js";

const userId = document.getElementById('userId');
const searchBtn = document.getElementById('searchBtn');
const message = document.getElementById('message');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userCity = document.querySelector("#userCity");

searchBtn.addEventListener('click', async () => {
    showScreen();
});

userId.addEventListener('keydown',async (e) => {
    if (e.key === "Enter") {
        showScreen();
    }
});

async function showScreen() {
    try {
        message.textContent = "読み込み中...";
        userName.textContent = "";
        userEmail.textContent = "";
        userCity.textContent = "";
        

        const id = Number(userId.value);
        if (id < 1 || id > 10) {
            throw new Error('入力が正しくありません');
        }
        const user = await getUser(id);

        message.textContent = "";
        userName.textContent = user.name;
        userEmail.textContent = user.email;
        userCity.textContent = user.address.city;



    } catch(e) {
        message.textContent = e.message;
    }
}