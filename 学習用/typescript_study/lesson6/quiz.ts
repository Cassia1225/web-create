interface Product {
    name:string;
    price:number;
    description? : string;
}

const product1: Product = {
  name: "マウス",
  price: 2000,
  description: "ワイヤレスマウス"
};

const product2: Product = {
  name: "キーボード",
  price: 5000
};

function showProduct(product: Product): void {
    console.log(product.name);
    console.log(product.price);
    if (product.description) {
        console.log(product.description);
    }
    else {
        console.log("説明なし");
    }
    console.log(product.description ?? "説明なし");
}