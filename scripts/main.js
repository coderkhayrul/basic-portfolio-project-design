$(document).ready(function () {
    var $header = $('header');
    var $sticky = $header.before($header.clone().addClass("sticky"));

    $(window).on("scroll", function () {
        var scrollFromTop = $(window).scrollTop();
        $("body").toggleClass("scroll", (scrollFromTop > 150));
    });

    // MASONRY
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 120,
        fitWidth: true,
        gutter: 0
    });

    // SLIDER
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        arrows: true,
        centerMode: true,
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
    });

    // SMOOTH SCROLL
    $('.menu li a[href^="#"]').on('click', function (e) {
        if (this.hash !== "") {
            e.preventDefault();

            const hash = this.hash;

            // $('html, body').animate({
            //     scrollTop: $(hash).offset().top
            // }, 800);
            if (hash.length) {
                $('html, body').stop().animate({
                    scrollTop: $(hash).offset().top - 70
                }, 1000);

            }
        }
    });
});