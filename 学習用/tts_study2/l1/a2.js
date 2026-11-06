function calculate(callback, value) {
    const result = callback(value);
    return result;
}

const answer = calculate((num) => {
    return num * 2;
},5);

console.log(answer);