export function TestLesson6() {

    type User = {
        id: number;
        name: string;
        age: number;
    }


    const users = ['Ayaka', 'Raiden', 'Noel'];
    const users2:User[] = [
        {
            id:1,
            name:"Ayaka",
            age:20
        },
        {
            id:2,
            name:"raiden",
            age:20
        }
    ]

    return (
        <ul>
            {
                users.map((user) => {
                    return (
                        <li key={user}>{user}</li>
                    );
                })
            }

            {
                users2.map((user) => {
                    return(
                        <li key={user.id}>{user.name} / {user.age}歳</li>
                    );
                })
            }

        </ul>
    )
}