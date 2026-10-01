const name = document.getElementById('name');
const email = document.getElementById('email');
const loadBtn = document.getElementById('loadBtn');

async function getUser() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    const user = await response.json();
    
    name.textContent = `名前:${user.name}`;
    email.textContent = `メール:${user.email}`;
}

loadBtn.addEventListener('click',getUser);