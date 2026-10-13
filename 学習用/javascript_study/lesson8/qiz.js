const scores = [80, 55, 92, 60, 45, 73];

const total = scores.reduce((sum,score) => {
    return sum += score;
}, 0);

console.log(total);

const total2 = scores
    .filter((score) => score >= 60)
    .reduce((sum,score) => sum + score, 0);

console.log(total2);