'use strict';

var form1 = document.getElementById('form1');
var loader = document.querySelector('.loader');

form1.addEventListener('click', function (e) {
    e.preventDefault();
    loader.style.display = 'flex';
});