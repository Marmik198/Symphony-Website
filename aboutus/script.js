$(document).ready(function () {
    $(".title").hide().fadeIn(2000);
    $("#carousel-wrapper").owlCarousel({
        autoplay: true,
        autoplaySpeed: 100,
        dots: true,
        items: 1,
        rewind: true,
    });
});