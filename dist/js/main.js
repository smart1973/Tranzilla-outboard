'use strict';

var setActiveStep = function setActiveStep(step) {
    var nav = document.querySelector('.navigation');
    var selector = '.step' + (step + 2); //+ '::after';    
    for (var i = 1; i <= step; i++) {
        nav.querySelector('.step' + i).classList.add('active');
    }

    //setPseudoElContent( selector, 'none' );
    // document.querySelector(selector).classList.add('no-after');
};

document.addEventListener('DOMContentLoaded', function () {
    /* first page */
    var form1 = document.getElementById('form1');
    var loader = document.querySelector('.loader');
    var selects = document.querySelectorAll('.js-select-custom');

    if (form1) {
        form1.addEventListener('click', function (e) {
            e.preventDefault();
            loader.style.display = 'flex';
        });
    }

    if (selects) {
        selects.forEach(function (select) {
            if (select.value) {
                select.previousElementSibling.style.display = 'none';
            } else {
                select.previousElementSibling.style.display = 'block';
            }
        });
        selects.forEach(function (select) {
            select.addEventListener('change', function () {
                if (this.value) {
                    this.previousElementSibling.style.display = 'none';
                } else {
                    this.previousElementSibling.style.display = 'block';
                }
            });
        });
    }
    /* for steps */
    /* const setPseudoElContent = (selector, value) => {    
        document.styleSheets[0].addRule(selector, `content: ${value} !important;`);
    } */

    if ($('.navigation')) {
        $('.navigation').slick({
            slidesToShow: 3,
            slidesToScrol: 1,
            dots: false,
            infinite: false,
            rtl: true,
            nextArrow: '<div class="arrowNav nextArrow"><span> הבא </span><svg viewBox="0 0 64 64"><path id="arrow-left-1" d="M46.077 55.738c0.858 0.867 0.858 2.266 0 3.133s-2.243 0.867-3.101 0l-25.056-25.302c-0.858-0.867-0.858-2.269 0-3.133l25.056-25.306c0.858-0.867 2.243-0.867 3.101 0s0.858 2.266 0 3.133l-22.848 23.738 22.848 23.738z"></path></svg></div>',
            prevArrow: '<div class="arrowNav prevArrow"><span> קודם </span><svg viewBox="0 0 64 64"><path id="arrow-right-1" d="M17.919 55.738c-0.858 0.867-0.858 2.266 0 3.133s2.243 0.867 3.101 0l25.056-25.302c0.858-0.867 0.858-2.269 0-3.133l-25.056-25.306c-0.858-0.867-2.243-0.867-3.101 0s-0.858 2.266 0 3.133l22.848 23.738-22.848 23.738z"></path></svg></div>'
        });
    }

    /* step2 */
    var clearTextarea = document.querySelector('.js-remove-text');
    var commnetTextarea = document.getElementById('comment');
    if (clearTextarea) {
        clearTextarea.addEventListener('click', function () {
            commnetTextarea.value = '';
        });
    }
});