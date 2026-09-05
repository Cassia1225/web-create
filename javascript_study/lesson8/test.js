const numbers = [10,20,30];

const total = numbers.reduce((sum,number) => {
    return sum + number;
}, 0);

console.log(total);