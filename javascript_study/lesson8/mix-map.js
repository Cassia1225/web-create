const prices = [500, 1200, 3000];

const total = prices
    .map((price) => price * 1.1)
    .reduce((sum,price) => sum + price, 0);

console.log(total)