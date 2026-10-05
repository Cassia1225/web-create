//User型の戻り値になる。
export async function getUser(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) {
        throw new Error('通信失敗');
    }
    const user = await res.json();
    return user;
}
