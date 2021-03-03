$(document).ready(function () {
    $("#carousel-wrapper").owlCarousel({
        items: 2,
        autoplay: true,
        margin: 20,
        autoplaySpeed: 100,
        dots: true,
        rewind: true,
        nav: true,
        navText: ['<i class="lni lni-chevron-left-circle"></i>', '<i class="lni lni-chevron-right-circle"></i>'],
        dots: false
    });
});
