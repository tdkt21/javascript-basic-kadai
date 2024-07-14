const button = document.getElementById('btn');
const h2 = document.getElementById('text');

button.addEventListener('click', () => {
    h2.textContent = 'ボタンをクリックしました';
})