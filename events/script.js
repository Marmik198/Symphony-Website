var keys = [
    "Verve",
    "Battle Of Bands",
    "Symphony Idol",
    "Decibels",
    "Natsamrat",
    "Ok Doodle",
    "Picture This",
    "Feel The Beat",
    "Film Flick",
    "Word Smith",
    "Somaiya Got Talent",
    "Mr. & Ms. Somaiya"
];

var slider = new Swiper(".swiper-container", {
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 100,
    centeredSlides: true,
    mousewheel: true,
    pagination: {
        el: ".planet-links",
        clickable: true,
        renderBullet: function (index, className) {
            return '<div class="' + className + '">' + keys[index] + "</div>";
        }
    }
});

slider.on("slideChange", function () {
    gsap.to(".slide-text span", 0.2, {
        x: "-100px"
    });
    gsap.to(".slide-number span", 0.2, {
        x: "-100px"
    });
    gsap.to(".slide-detail span", 0.5, {
        x: "-1000px"
    });
    gsap.to(".slide-detail-facts div", 0.5, {
        x: "-1000px"
    });
    gsap.to(".swiper-slide-active", 0.5, {
        scale: 0.85
    });
    gsap.to(".swiper-slide .slide-img", 1, {
        rotation: 20
    });
});

slider.on("slideChangeTransitionEnd", function () {
    gsap.to(".swiper-slide .slide-img", 1, {
        rotation: 5
    });
    gsap.to(".slide-text span", 0.2, {
        x: 0,
        delay: 0.1
    });
    gsap.to(".slide-text span", 0, {
        x: "100px"
    });

    gsap.to(".slide-number span", 0.2, {
        x: 0
    });
    gsap.to(".slide-number span", 0, {
        x: "100px"
    });

    gsap.to(".slide-detail span", 0.2, {
        x: 0
    });

    gsap.to(".slide-detail-facts div", 0.5, {
        x: 0
    });

    gsap.to(".swiper-slide-active", 0.5, {
        scale: 1,
        ease: Power4.easeOut
    });

    gsap.to(".swiper-slide-active .slide-text", 0, {
        autoAlpha: 1
    });
    gsap.to(".swiper-slide-active .slide-number", 0, {
        autoAlpha: 1
    });

    gsap.to(".swiper-slide-next .slide-text", 0, {
        autoAlpha: 0
    });
    gsap.to(".swiper-slide-prev .slide-text", 0, {
        autoAlpha: 0
    });

    gsap.to(".swiper-slide-next .slide-number", 0, {
        autoAlpha: 0
    });
    gsap.to(".swiper-slide-prev .slide-number", 0, {
        autoAlpha: 0
    });
});

gsap.to(".rockbg1", 2, {
    y: 12,
    repeat: -1,
    yoyo: true,
    delay: 0
});

gsap.to(".swiper-slide-next .slide-text", 0, {
    autoAlpha: 0
});
gsap.to(".swiper-slide-prev .slide-text", 0, {
    autoAlpha: 0
});

gsap.to(".swiper-slide-next .slide-number", 0, {
    autoAlpha: 0
});
gsap.to(".swiper-slide-prev .slide-number", 0, {
    autoAlpha: 0
});

gsap.to(".swiper-slide", 0, {
    scale: 0.85
});

gsap.to(".swiper-slide-active", 0, {
    scale: 1
});

$(function () {
    $("#sectiontwo").css("background", "linear-gradient(to bottom, #07334e , #094163)");
    window.addEventListener("wheel", function () {
        if ($(".swiper-slide-active").hasClass("s-1")) {
            $("#sectiontwo").css("background", "linear-gradient(to bottom, #07334e , #094163)");
        }
        if ($(".swiper-slide-active").hasClass("s-2")) {
            $("#sectiontwo").css("background", "linear-gradient(to bottom, #2e3637 , #647375)");
        }
        if ($(".swiper-slide-active").hasClass("s-3")) {
            $("#sectiontwo").css("background", "linear-gradient(to bottom, #471f04 , #5e2905)");
        }
        if ($(".swiper-slide-active").hasClass("s-4")) {
            $("#sectiontwo").css("background", "linear-gradient(to bottom, #450018 , #6b0227)");
        }
        if ($(".swiper-slide-active").hasClass("s-5")) {
            $("#sectiontwo").css("background", "linear-gradient(to bottom, #47200a , #632d0e)");
        }
        if ($(".swiper-slide-active").hasClass("s-6")) {
            $("#sectiontwo").css("background", "linear-gradient(to bottom, #29425a , #345678)");
        }
        if ($(".swiper-slide-active").hasClass("s-7")) {
            $("#sectiontwo").css("background", "linear-gradient(to bottom, #4a0021 , #780136)");
        }
        if ($(".swiper-slide-active").hasClass("s-8")) {
            $("#sectiontwo").css("background", "linear-gradient(to bottom, #28012e , #4b0257)");
        }
        if ($(".swiper-slide-active").hasClass("s-9")) {
            $("#sectiontwo").css("background", "linear-gradient(to bottom, #212a07 , #3e4f0d)");
        }
        if ($(".swiper-slide-active").hasClass("s-10")) {
            $("#sectiontwo").css("background", "linear-gradient(to bottom, #32210e , #4f3416)");
        }
        if ($(".swiper-slide-active").hasClass("s-11")) {
            $("#sectiontwo").css("background", "linear-gradient(to bottom, #08424e , #0d6678)");
        }
        if ($(".swiper-slide-active").hasClass("s-12")) {
            $("#sectiontwo").css("background", "linear-gradient(to bottom, #650137 , #91014f)");
        }
    });
    $(".planet-links").on("click", "div", function () {
        if ($(".swiper-pagination-bullet-active").text() == "Verve") {
            $("#sectiontwo").css("background", "linear-gradient(to bottom, #07334e , #094163)");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Battle Of Bands") {
            $("#sectiontwo").css("background", "linear-gradient(to bottom, #2e3637 , #647375)");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Symphony Idol") {
            $("#sectiontwo").css("background", "linear-gradient(to bottom, #471f04 , #5e2905)");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Decibels") {
            $("#sectiontwo").css("background", "linear-gradient(to bottom, #450018 , #6b0227)");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Natsamrat") {
            $("#sectiontwo").css("background", "linear-gradient(to bottom, #47200a , #632d0e)");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Ok Doodle") {
            $("#sectiontwo").css("background", "linear-gradient(to bottom, #29425a , #345678)");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Picture This") {
            $("#sectiontwo").css("background", "linear-gradient(to bottom, #4a0021 , #780136)");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Feel The Beat") {
            $("#sectiontwo").css("background", "linear-gradient(to bottom, #28012e , #4b0257)");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Film Flick") {
            $("#sectiontwo").css("background", "linear-gradient(to bottom, #212a07 , #3e4f0d)");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Word Smith") {
            $("#sectiontwo").css("background", "linear-gradient(to bottom, #32210e , #4f3416)");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Somaiya Got Talent") {
            $("#sectiontwo").css("background", "linear-gradient(to bottom, #08424e , #0d6678)");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Mr. & Ms. Somaiya") {
            $("#sectiontwo").css("background", "linear-gradient(to bottom, #650137 , #91014f)");
        }
    });
});

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        });
        tabs.forEach(tab => {
            tab.classList.remove('active')
        });
        tab.classList.add('active');
        target.classList.add('active');
    });
});

const btns = document.querySelectorAll('.data');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const question = e.currentTarget;
        question.classList.toggle('show-text');
    });
});

let myColors = ["#07334e", "#2e3637", "#471f04", "#450018", "#47200a", "#29425a", "#4a0021", "#28012e", "#212a07", "#32210e", "#08424e", "#650137"];

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xD = null;
var yD = null;

function getTouches(e) {
    return e.touches || e.originalEvent.touches;
}

function handleTouchStart(e) {
    const firstTouch = getTouches(e)[0];
    xD = firstTouch.clientX;
    yD = firstTouch.clientY;
};

function handleTouchMove(e) {
    if (!xD || !yD) {
        return;
    }

    var xU = e.touches[0].clientX;
    var yU = e.touches[0].clientY;

    var xDiff = xD - xU;
    var yDiff = yD - yU;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            let index = $(".swiper-slide-active")[0].classList.value[15];
            if ($(".swiper-slide-active")[0].classList.value[16] != " ") {
                index += $(".swiper-slide-active")[0].classList.value[16];
            }
            let color = myColors[index];
            $("#sectiontwo").css("background", color);
        } else {
            if ($(".swiper-slide-active").hasClass("s-1")) {
                return;
            }
            let index = $(".swiper-slide-active")[0].classList.value[15];
            if ($(".swiper-slide-active")[0].classList.value[16] != " ") {
                index += $(".swiper-slide-active")[0].classList.value[16];
            }
            let color = myColors[index - 2];
            $("#sectiontwo").css("background", color);
        }
    }
    xD = null;
    yD = null;
};
