const input = document.getElementById('input');
const text = document.getElementById('text');

function handleKeyDown(event) {
   if (event.key !== 'Enter') {
    return;
   }
   if (input.value.trim() === "") {
    text.textContent = '入力してください';
    return;
   }
   text.textContent = '送信しました';
}

input.addEventListener('keydown',handleKeyDown);