(function(){
    $("body").hide().fadeIn(1000);
})();
function update() {
    if ($(window).scrollTop() > 400) {
        $('.signup_scroll').animate({
            "bottom": '0px'
        }, 300);
    } else {
        $('.signup_scroll').animate({
            "bottom": '-90px'
        }, 300);
    }
}

setInterval(update, 500);
