const prices = [500, 1200, 3000, 800];

const total = prices
  .filter((price) => price >= 1000)
  .reduce((sum, price) => sum + price, 0);

console.log(total)