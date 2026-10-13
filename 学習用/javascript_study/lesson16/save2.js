const scores = [80,55,92,60];

localStorage.setItem('scores',JSON.stringify(scores));

const data = JSON.parse(localStorage.getItem('scores'));

console.log(data);