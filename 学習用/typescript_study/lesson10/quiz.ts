export {};

interface User {
    id: number;
    name: string;
    email: string;
    address: {
        city: string;
    }
}

async function getUser(id: number): Promise<User> {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    )
    if (!res.ok) {
        throw new Error('通信に失敗');
    }

    const user:User = await res.json();

    return user;

}

async function main(): Promise<void> {
    const user =  await getUser(2);

    console.log(user.name);
    console.log(user.email);
    console.log(user.address.city);
}

main();