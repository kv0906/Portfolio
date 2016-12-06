
new WOW().init();
$(function () {
    $(".main-heading").typed({
//        strings: ["^1800 I'm Van", "I'm fresh front-end developer", "I'm self-taught developer", "I'm passionate about web design"],
        stringsElement: $('#typed-strings'),
        typeSpeed: 20,
        backDelay: 500,
        showCursor: true,
        // character for cursor
        cursorChar: "|",
        loop: true
    });
});


//Masonry grid layout 
$('#masonry').masonry({
    itemSelector: '.item',
    columnWidth: 50,
    gutter: 10
});


//jQuery to collapse the navbar on scroll
$(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
}); 
