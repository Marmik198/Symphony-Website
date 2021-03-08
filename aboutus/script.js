$(document).ready(function () {
    $("#carousel-wrapper").owlCarousel({
        autoplay: true,
        autoplaySpeed: 100,
        dots: true,
        items: 1,
        rewind: true,
    });
});

var textWrapper = document.querySelector('.ml1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
        loop: true
    })
    .add({
        targets: '.ml1 .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 2000,
        delay: (el, i) => 50 * (i + 1)
    }).add({
        targets: '.ml1',
        opacity: 0,
        duration: 100,
        easing: "easeOutExpo",
        delay: 220
    });

var textWrapper2 = document.querySelector('.ml2');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
        loop: true
    })
    .add({
        targets: '.ml2 .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 2000,
        delay: (el, i) => 50 * (i + 1)
    }).add({
        targets: '.ml2',
        opacity: 0,
        duration: 100,
        easing: "easeOutExpo",
        delay: 100
    });

