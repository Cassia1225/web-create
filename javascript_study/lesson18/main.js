import { getUser } from "./api.js";

const loadBtn = document.getElementById('loadBtn');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userCity = document.getElementById('userCity');

loadBtn.addEventListener('click', async () => {
    const user = await getUser();

    userName.textContent = user.name;
    userEmail.textContent = user.email;
    userCity.textContent = user.address.city;
    
});