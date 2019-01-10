let form1 = document.getElementById('form1');
let loader = document.querySelector('.loader');

form1.addEventListener('click', (e) => {
    e.preventDefault();
    loader.style.display = 'flex';
})