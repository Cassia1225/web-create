export function Lesson6() {
    type Product = {
        id: number;
        name: string;
        price: number;
    }

    const products: Product[] = [
        {
            id:1,
            name:"マウス",
            price:2000
        },
        {
            id: 2,
            name: "キーボード",
            price: 5000
        },
        {
            id: 3,
            name: "モニター",
            price: 25000
        }
    ];

    return(
        <>
        <ul>
            {
                products.map((product) => {
                    return(
                        <li key={product.id}>{product.name}:{product.price}円</li>
                    );
                })
            }    
        </ul>        
        </>
    )
}