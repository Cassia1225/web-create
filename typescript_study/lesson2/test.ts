const scores:Array<number> = [80,90,100];
const flags:boolean[] = [true, false, true];

scores.push(120);
console.log(scores);

const users: {
    name:string;
    age:number;
}[] = [
    {
        name:"ayaka",
        age:18
    },
    {
        name:"raiden",
        age:20
    }
]

users.map((user) => {
    console.log(user.name);
})