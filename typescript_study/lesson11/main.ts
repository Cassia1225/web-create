import { getUser } from "./api.js";

const userId = document.getElementById('userId') as HTMLInputElement;
const searchBtn = document.getElementById('searchBtn') as HTMLButtonElement;
const message = document.getElementById('message') as HTMLParagraphElement;
const userName = document.getElementById('userName') as HTMLParagraphElement;
const userEmail = document.getElementById('userEmail') as HTMLParagraphElement;
const userCity = document.getElementById('userCity') as HTMLParagraphElement;

async function searchUser(): Promise<void> {

    try 
    {
        message.textContent = "読み込み中";
        userName.textContent = "";
        userEmail.textContent = "";
        userCity.textContent = "";

        const value = userId.value.trim();

        if (value === "") {
            throw new Error('IDを入力してください');
        }
        const id = Number(value);
         
        if(id < 1 || id > 10) {
        throw new Error('数値を1から10の間で入力してください');
        }

        const user = await getUser(id);

        message.textContent = "";
        userName.textContent = user.name;
        userEmail.textContent = user.email;
        userCity.textContent = user.address.city;

    } 
    catch(e) 
    {
        if (e instanceof Error) {
            message.textContent = e.message;
        }
        
            
    }
}

searchBtn.addEventListener('click',searchUser);

userId.addEventListener('keydown',(e) => {
    if (e.key === "Enter") {
        searchUser();
    }
});