$(document).ready(() => {
    let btns = document.querySelectorAll(".button__open");
    let popups = document.querySelectorAll(".strategy-container-popup");
    let elem = document.querySelectorAll(".popup_opened");


    function togglePopup() {
        let index = Array.from(btns).indexOf(this);
        popups[index].classList.toggle("popup_opened");
    }

    btns.forEach(btn => btn.addEventListener('click', togglePopup));


    $('.strategy-cancel').click((e) => {
        $('.strategy-container-popup').removeClass('popup_opened');
    })


    $(".bnt button, .menu-bnt button").click(function () {
        $("#consultation-container").css('display', 'flex');
    });

    $('#consultation-cancel-close, #consultation-container').click((e) => {
        if (e.target.id === 'consultation-container' || e.target.id === 'consultation-cancel-close') {
            $('#consultation-container').hide();
        }
    })


    $('#burger').click(() => {
        $('#header-menu').toggleClass('menu-open');
    });

    $('.menu-item a, #main-container, #header-menu').click(() => {
        $('#header-menu').removeClass('menu-open');
    });

    $('#consultation-content .bnt > button').click(() => {
        let name = $('#name');
        let phone = $('#phone');
        let email = $('#email');

        name.css('border-color', ' rgba(0, 0, 0, 0.15)');
        phone.css('border-color', ' rgba(0, 0, 0, 0.15)');
        email.css('border-color', ' rgba(0, 0, 0, 0.15)');

        $('#consultation-error').hide();

        if (!name.val()) {
            name.css('border-color', 'red');
            $('#consultation-error').show();
        }

        if (!phone.val()) {
            phone.css('border-color', 'red');
            $('#consultation-error').show();
        }

        if (!email.val()) {
            email.css('border-color', 'red');
            $('#consultation-error').show();
        }

        if (name.val() && phone.val() && email.val()) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&phone=' + phone.val() + '&email' + email.val(),
                success: () => {
                    $('#consultation-container').hide();
                },
                error: () => {
                    $('#consultation-container').hide();
                    alert('Ошибка. Свяжитесь, пожалуйста, по номеру телефона.')
                },
            });
        } else {
            $('#consultation-error').show();
        }


    });
});



