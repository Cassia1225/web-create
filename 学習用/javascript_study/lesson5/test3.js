const scores = [80, 55, 92, 60, 45];

scores.forEach((score,index) => {
    if (score >= 60) {
        console.log(`${index+1}人目：${score}点：合格`);
    }
    else {
        console.log(`${index+1}人目：${score}点：不合格`);
    }
});
