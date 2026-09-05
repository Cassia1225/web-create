const products = [
  { name: "りんご", price: 100 },
  { name: "バナナ", price: 150 },
  { name: "みかん", price: 200 },
  { name: "ぶどう", price: 300 }
];

const expensiveProducts = products.filter((product) => {
  return product.price >= 200;
});

console.log(expensiveProducts);