export interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
}

//User型の戻り値になる。
export async function getUser(id: number): Promise<User> {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if(!res.ok){
        throw new Error('通信失敗');
    }

    const user:User = await res.json();

    return user;
}