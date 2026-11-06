const products = [
    { name: "ワッフル", price: 150, stock: 10 },
    { name: "クレープ", price: 300, stock: 0 },
    { name: "チュロス", price: 200, stock: 5 }
];

const calculateTotal = (price, quantity) => {
    return price * quantity;
}

function printProducts(products, callback) {
    products.forEach((product) => {
        console.log(`${product.name} : ${callback(product.price, product.stock)}円`)
    });
}

printProducts(products, calculateTotal);

