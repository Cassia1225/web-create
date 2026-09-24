const fruits = ['りんご','バナナ','みかん']

localStorage.setItem('fruits',JSON.stringify(fruits));

const savedFruits = localStorage.getItem('fruits');
console.log(savedFruits);

const fruits2 = JSON.parse(savedFruits);
console.log(fruits2);
console.log(fruits2[0]);