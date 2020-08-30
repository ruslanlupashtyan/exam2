$('.slider_box').slick({
    arrows: false,
    dots: true,
    dotsClass: "my-dots",
    autoplay: true,
    infinite: true,
    speed: 500,
});

$('.news_slider').slick({
    prevArrow: '<button type="button" class="slick_arrow slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick_arrow slick-next"><i class="fas fa-angle-right"></i></button>',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    arrows: true,
    dotsClass: "slider_dots",
    // mobileFirst: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false,
                arrows: false,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false
            }
        }
    ]
});

