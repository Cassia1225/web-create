export async function getUser() {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/users/2"
    );

    if (!res.ok) {
        throw new Error("通信に失敗しました。");
    }

    const user = await res.json();

    return user;
}