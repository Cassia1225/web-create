function triple(number) {
  // numberを3倍にして返す
  const result = number * 3;
  return result;
}

function calculate(callback, value) {
    const result = callback(value);
    return result;
  // callbackにvalueを渡して実行し、その結果を返す
}

const answer = calculate(triple, 4);
console.log(answer);