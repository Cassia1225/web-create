const scores = [80, 55, 92, 60, 45, 73];

const score_filter = scores.filter((score) =>{
    return score >= 60;
});

console.log(score_filter);

const score_find = scores.find((score) => {
    return score >= 90;
});

console.log(score_find);