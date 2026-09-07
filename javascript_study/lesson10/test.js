const btn = document.querySelector('#btn');
let clickFlag = false;

if (clickFlag === true) {
    btn.style.color = "cyan";
}
else {
    btn.style.color = 'white';
}

btn.addEventListener('click', () => {
    console.log('クリックされました。');
    clickFlag = true;
});