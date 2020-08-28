$('.slider_box').slick({
    arrows: false,
    dots: true,
    dotsClass: "my-dots",
    autoplay: true,
    infinite: true,
    speed: 500,
});

$('.news_slider').slick({
    arrows: true,
    dots: true,
    dotsClass: "slider_dots",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    slide: ".news_slide"
});