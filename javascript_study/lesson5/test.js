const arrays = [78,92,55,84,60]

let sum = 0, count = 0;
let max = arrays[0];

for (let i = 0; i < arrays.length; i++) {
    sum += arrays[i];
    if (arrays[i] >= 80) {
        count++;
    }
    if (arrays[i] >= 60) {
        console.log(`60点以上なので表示：${arrays[i]}`);
    }
    if (arrays[i] > max) {
        max = arrays[i];
    }

}

console.log(`max:${max}`);
console.log(`合計：${sum} 平均：${sum / arrays.length}`);