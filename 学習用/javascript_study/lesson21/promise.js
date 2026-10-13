async function getMessage() {
  return "こんにちは";
}

const message = getMessage();

console.log(message);

async function main() {
  const res = await getMessage();
  console.log(res);
}

main();