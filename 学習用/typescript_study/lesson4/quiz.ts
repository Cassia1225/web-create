interface Product {
    id:number;
    name:string;
    price:number;
}

interface SaleProduct extends Product {
    discountRate:number;
}

const saleItem:SaleProduct = {
    id:1,
    name:"モニター",
    price:30000,
    discountRate:0.2
}

function getSalePrice(product: SaleProduct): number {
    return product.price*(1 - product.discountRate);
}