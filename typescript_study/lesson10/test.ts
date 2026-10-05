export {};

interface User {
    id: number;
    name: string;
    email: string;
    address: {
        city: string;
    }
}

async function getUser(): Promise<void> {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/users/2"
    );

    const user: User = await res.json();

    console.log(user.name);
    console.log(user.email);
    console.log(user.address.city);
}