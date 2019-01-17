let form1 = document.getElementById('form1');
let loader = document.querySelector('.loader');
let select = document.getElementById('select');
let selectPlaceholder = document.querySelector('.select-placeholder');

form1.addEventListener('click', (e) => {
    e.preventDefault();
    loader.style.display = 'flex';
})

select.addEventListener('change', function() {
    if (this.value) {
        selectPlaceholder.style.display = 'none'
    } else {
        selectPlaceholder.style.display = 'block'
    }
})