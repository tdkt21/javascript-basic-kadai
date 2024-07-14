const button = document.getElementById('btn');
const h2 = document.getElementById('text');

button.addEventListener('click', () => {
    setTimeout(() => {
    h2.textContent = 'ボタンをクリックしました';
    }, 2000);
})