interface User {
    id:number;
    name:string;
    email:string;
}

const users: User[] = [
    {
        id:1,
        name:"Ayaka",
        email:"ayaka@example.com",
        isAdmin:true
    }
];

interface AdminUser extends User {
    isAdmin:boolean;
}