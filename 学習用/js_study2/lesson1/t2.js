function double(number) {
  return number * 2;
}

function calculate(callback, value) {
  const result = callback(value);
  console.log(result);
}

const answer = calculate(double, 5);
console.log(answer);