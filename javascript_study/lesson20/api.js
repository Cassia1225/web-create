export async function getUser(id) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (!res.ok) {
        throw new Error('通信に失敗しました。');
    }

    const user = await res.json();

    return user;
}