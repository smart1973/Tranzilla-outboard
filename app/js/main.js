const setActiveStep = (step) => {
    /* let nav = document.querySelector('.navigation'); */
    $('.step').removeClass('active');
    let selector = '.step' + (step+2) //+ '::after';    
    for (let i = 1; i <= step; i++) {
        /* nav.querySelector('.step'+i).classList.add('active');    */     
        $('.step'+i).addClass('active');
    }
    
    //setPseudoElContent( selector, 'none' );
// document.querySelector(selector).classList.add('no-after');
}

const validationForm = () => {
    let valid_form = document.querySelector('.form_valid');
    if (valid_form) {
        valid_form.addEventListener('submit', (e) => {
            e.preventDefault();
            let requiredFields = document.querySelectorAll('.required');
            requiredFields.forEach( (field) => {
                if (field.value == '') {
                    if ( field.nodeName == 'SELECT' ) {
                        field.closest('.select-container').classList.add('error');
                        field.addEventListener('change', function() {
                            if (this.nodeName == 'SELECT' && this.value != '') {
                                this.closest('.select-container').classList.remove('error');
                            }
                        })
                    } else { 
                        field.classList.add('error')
                        field.addEventListener('input', function() {
                            if (this.nodeName == 'INPUT') {
                                this.classList.remove('error');
                            }
                        })
                    }
                }            
            })

            let errors = document.querySelectorAll('.error');
            if (errors.length === 0) {
                console.log(birthday.value);
                let data = birthday.value.split('/');
                let d = data[0];
                let m = data[1];
                let y = data[2];
                let nowDate = new Date();
                let selectedBirthday = new Date(y, m, d);
                let age = parseInt( (nowDate - selectedBirthday) / 1000 / 60 / 60 / 24 / 365 );
                if (age < 18) {
                    let forAdultsMessage = document.querySelector('.overlay');
                    forAdultsMessage.classList.add('show');

                    let closeModal = document.querySelector('.close-modal');
                    closeModal.addEventListener('click', () => {
                        forAdultsMessage.classList.remove('show');
                    })
                }
            }
        })
    }
}

const switchNavigation = (activeStep) => {
    setActiveStep(activeStep);
    $('.navigation').slick('slickGoTo', activeStep - 2);
    if ($(window).width() <= 768) {
        if (activeStep == 9) {
            setActiveStep(activeStep);
            $('.navigation').slick('slickGoTo', activeStep - 3);
        } /* else {
            setActiveStep(activeStep - 1);
            $('.navigation').slick('slickGoTo', activeStep - 2);
        } */

        $('.desktop .form_valid').removeClass('form_valid');
        validationForm();
    } else {
        $('.desktop .form').addClass('form_valid');        
        /* setActiveStep(activeStep);
        $('.navigation').slick('slickGoTo', activeStep - 2); */
        validationForm();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    /* first page */
    let form1 = document.getElementById('form1');
    let loader = document.querySelector('.loader');
    let selects = document.querySelectorAll('.js-select-custom');

    if (form1) {
        form1.addEventListener('click', (e) => {
            e.preventDefault();
            loader.style.display = 'flex';
        })
    }

    if (selects) {        
        selects.forEach(function(select) {
            if (select.value) {                                
                select.previousElementSibling.style.display = 'none'
            } else {
                select.previousElementSibling.style.display = 'block'
            }
        })
        selects.forEach(function(select) {    
            select.addEventListener('change', function() {
                if (this.value) {
                    this.previousElementSibling.style.display = 'none'
                } else {
                    this.previousElementSibling.style.display = 'block'
                }
            })
        })
    }
    /* for steps */
    /* const setPseudoElContent = (selector, value) => {    
        document.styleSheets[0].addRule(selector, `content: ${value} !important;`);
    } */

    if ($('.navigation') && !!$('.navigation').slick) {
        $('.navigation').slick({
            slidesToShow: 3,
            slidesToScrol: 1,
            dots: false,
            infinite: false,
            rtl: true,
            speed: 200,            
            nextArrow: '<div class="arrowNav nextArrow"><span> הבא </span><svg viewBox="0 0 64 64"><path id="arrow-left-1" d="M46.077 55.738c0.858 0.867 0.858 2.266 0 3.133s-2.243 0.867-3.101 0l-25.056-25.302c-0.858-0.867-0.858-2.269 0-3.133l25.056-25.306c0.858-0.867 2.243-0.867 3.101 0s0.858 2.266 0 3.133l-22.848 23.738 22.848 23.738z"></path></svg></div>',
            prevArrow: '<div class="arrowNav prevArrow"><span> קודם </span><svg viewBox="0 0 64 64"><path id="arrow-right-1" d="M17.919 55.738c-0.858 0.867-0.858 2.266 0 3.133s2.243 0.867 3.101 0l25.056-25.302c0.858-0.867 0.858-2.269 0-3.133l-25.056-25.306c-0.858-0.867-2.243-0.867-3.101 0s-0.858 2.266 0 3.133l22.848 23.738-22.848 23.738z"></path></svg></div>',
          
        })   
        $(window).resize(function() {
            if ($(window).width() <= 450) {
                /* $('.navigation').slick('slickGoTo', 5); */
                /* $('.navigation').slick('reInit'); */
            }
        })
    }

    /* step2 */
    let clearTextarea = document.querySelector('.js-remove-text');
    let commnetTextarea = document.getElementById('comment');
    if (clearTextarea) {
        clearTextarea.addEventListener('click', () => {
            commnetTextarea.value = ''
        })
    }

    let birthday = document.getElementById('birthday');
    if (birthday) {
        birthday.addEventListener('keypress', function(e) {
            e.preventDefault();
        })
    }

    validationForm();

    /* step 5 */

    let hasPolitic = document.getElementById('has_politic');    
    if (hasPolitic) {
        //let addFields = document.getElementById('additional_fields');
        let addFields = $('#additional_fields');
        if (hasPolitic.checked) addFields.fadeIn();
        hasPolitic.addEventListener('change', function() {
            if (this.checked) {                
                addFields.slideDown();
                $('.checked-hide').fadeOut();
            } else {
                addFields.slideUp();
                $('.checked-hide').fadeIn();
            }
        });
    }

    /* step8 */
    let right1 = document.getElementById('right1');
    let right2 = document.getElementById('right2');
    let descrRight1 = document.getElementById('descr_right1');
    let descrRight2 = document.getElementById('descr_right2');
    if (right1 && right1.checked) {
        descrRight1.style.display = 'block'
    }
    if (right2 && right2.checked) {
        descrRight2.style.display = 'block'
    }
    if (right1 && right2) {
        right1.addEventListener('change', function() {
            if (this.checked) {
                descrRight1.style.display = 'block';
                descrRight2.style.display = 'none';
            } else {
                descrRight2.style.display = 'block';
                descrRight1.style.display = 'none';
            }
        })
        right2.addEventListener('change', function() {
            if (this.checked) {
                descrRight2.style.display = 'block';
                descrRight1.style.display = 'none';
            } else {
                descrRight1.style.display = 'block';
                descrRight2.style.display = 'none';
            }
        })
    }

    /* step9 */

    $('.input_block input').change(function() {
        if($(this).val())
            $(this).addClass('has_value');
        else
            $(this).removeClass('has_value');
    });

    /* all steps where there is question icon */
    const replaceQuestionIcon = () => {
        if ($(window).width() <= 768) {
            $('img[src="img/q.png"]').attr('src', 'img/q_big.png')
                                     .css('width', '30px');
        } else {
            $('img[src="img/q_big.png"]').attr('src', 'img/q.png')
                                     .css('width', 'auto');
        }
    }
    const replaceInfoIcon = () => {
        if ($(window).width() <= 768) {
            $('img[src="img/info.png"]').attr('src', 'img/info_big.png')
                                     .css('width', '30px');
        } else {
            $('img[src="img/info_big.png"]').attr('src', 'img/info.png')
                                     .css('width', 'auto');
        }
    }
     replaceQuestionIcon();
     replaceInfoIcon();
    $(window).resize(() => {
        replaceQuestionIcon();
        replaceInfoIcon();
    })
    
    
})