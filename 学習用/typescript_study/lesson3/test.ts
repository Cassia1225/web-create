type Product = {
    name:string;
    price:number;
    inStock:boolean;
};

const Products: Product[] = [
    {
        name:'マウス',
        price:2000,
        inStock:true
    },
    {
        name:'キーボード',
        price:5000,
        inStock:false
    },
    {
        name:'モニター',
        price:30000,
        inStock:true
    }
]

type User = {
    name:string;
    age:number;
}

function intro(user:User):string {
    return `${user.name}さんは${user.age}歳です。`;
}

//User型のオブジェクトを引数として使う。