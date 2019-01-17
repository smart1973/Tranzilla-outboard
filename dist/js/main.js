'use strict';

var form1 = document.getElementById('form1');
var loader = document.querySelector('.loader');
var select = document.getElementById('select');
var selectPlaceholder = document.querySelector('.select-placeholder');

form1.addEventListener('click', function (e) {
    e.preventDefault();
    loader.style.display = 'flex';
});

select.addEventListener('change', function () {
    if (this.value) {
        selectPlaceholder.style.display = 'none';
    } else {
        selectPlaceholder.style.display = 'block';
    }
});