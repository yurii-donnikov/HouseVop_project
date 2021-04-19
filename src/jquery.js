// import '../node_modules/slick-carousel/slick/slick';

$('#scroll_bottom').click(function() {
    $('html, body').animate({
        scrollTop: $("footer").offset().top
    }, 600);
})

function buttonClick() {
    $('.buttonMenu').click(function(event) {

        $('.header_menu').toggleClass('button_active');
        if ($('.header_menu').hasClass('button_active')) {
            $('.topBut').css({
                'transform': 'rotate(45deg)',
                'top': '8px'
            });
            $('.buttomBut').css({
                'transform': 'rotate(-45deg)',
                'bottom': '8px'
            });
            $('.centerBut').css('display', 'none');
        } else {
            $('.topBut').css({
                'transform': 'rotate(0deg)',
                'top': '0px'
            });
            $('.buttomBut').css({
                'transform': 'rotate(0deg)',
                'bottom': '0px'
            });
            $('.centerBut').css('display', 'block');
        }
    });
}
buttonClick()
export { buttonClick }