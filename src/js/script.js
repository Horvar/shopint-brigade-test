import $ from 'jquery';

$('.section-greet__bg').fadeOut(0);

$('.js-delay-short, .js-delay-long').css({
    'opacity': '0'
});


$(document).ready(function(){

    $('.section-greet__bg').fadeIn(500);

    setTimeout(() => {
        $('.js-delay-long').css({
            'opacity': '1',
            'transition': '1s'
        });
    }, 500);

    setTimeout(() => {
        $('.js-delay-short').css({
            'opacity': '1',
            'transition': '1s'
        });
    }, 0);

});