const prices = [500,1200,3000,800];

const tax_plus = prices.map((price) => {
    return price * 1.1;
})
console.log(tax_plus);