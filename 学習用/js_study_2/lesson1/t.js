function greet(name) {
  return `${name}さん、こんにちは`;
}

function run(callback) {
  console.log("開始");
  const message = callback("ミク");
  console.log(message);
}

run(greet);

//出力は callback　に　greet　が入る。