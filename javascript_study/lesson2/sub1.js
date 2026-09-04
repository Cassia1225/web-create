const totalPrice = 3500;
const isMember = true;

if (totalPrice >= 5000) {
    console.log('送料無料です。');
    console.log(totalPrice);
}
else if (totalPrice > 3000 && isMember === true) {
    console.log('送料無料です。');
    console.log(totalPrice);
}
else {
    console.log('送料は500円です。');
    console.log(totalPrice + 500);
}