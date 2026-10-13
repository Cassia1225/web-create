function operate(
  a: number,
  b: number,
  callback: (x: number, y: number) => number
): number {
  return callback(a, b);
}

const result1 = operate(10, 5, (x, y) => {
  return x + y;
});

const result2 = operate(10, 5, (x, y) => {
  return x * y;
});

console.log(result1);
console.log(result2);

