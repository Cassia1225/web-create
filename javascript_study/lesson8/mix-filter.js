const prices = [500, 1200, 3000, 800];

const filteredPrices = prices.filter((price) => {
    return price >= 1000;
});

const result = filteredPrices.reduce((sum,price) => {
    return sum + price;
}, 0);

console.log(result);

/*
methodチェーンと言って、途中で変数を作らずに書くことができる。
const total = prices
  .filter((price) => price >= 1000)
  .reduce((sum, price) => sum + price, 0);
*/