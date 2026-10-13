const loadBtn = document.getElementById('loadBtn');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userCity = document.getElementById('userCity');

async function getUser() {

    try {
        const res = await fetch(
            'https://jsonplaceholder.typicode.com/users/2'
        );

        if (!res.ok) {
            throw new Error("通信に失敗しました。");
        }

        const user = await res.json();

        userName.textContent = user.name;
        userEmail.textContent = user.email;
        userCity.textContent = user.address.city;
    } catch(e) {
        console.log("通信に失敗しました");
        console.log(e);
    }
    
}

loadBtn.addEventListener('click',getUser);