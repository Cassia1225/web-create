const names = ["田中", "佐藤", "鈴木", "高橋"];

const result = names.filter((name) => {
  return name.length === 2;
});

console.log(result);