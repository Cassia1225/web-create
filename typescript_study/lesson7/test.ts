function calculate(a: number,b: number,callback: (x: number, y: number) => number
): number {
  return callback(a, b);
}
const result = calculate(
  10,
  20,
  (x, y) => {
    return x + y;
  }
);

console.log(result);