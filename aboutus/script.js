$(document).ready(function () {
    $(".title").hide().fadeIn(2000);
    $("#carousel-wrapper").owlCarousel({
        autoplay: true,
        autoplaySpeed: 100,
        nav: true,
        navText: ['<i class="lni lni-chevron-left-circle"></i>', '<i class="lni lni-chevron-right-circle"></i>'],
        dots: false,
        items: 1,
        rewind: true,
    });
});
