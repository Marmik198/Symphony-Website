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
    $("body").css("background", "#07334e");
    $("#sectiontwo").css("background", "#07334e");
    window.addEventListener("wheel", function () {
        if ($(".swiper-slide-active").hasClass("s-1")) {
            //                $("body").css("background", "linear-gradient(to bottom, #07334e , #094163)");
            //                $("#sectiontwo").css("background", "linear-gradient(to bottom, #07334e , #094163)");

            $("body").css("background", "#07334e");
            $("#sectiontwo").css("background", "#07334e");
        }
        if ($(".swiper-slide-active").hasClass("s-2")) {
            //            $("body").css("background", "linear-gradient(to bottom, #2e3637 , #647375)");
            //            $("#sectiontwo").css("background", "linear-gradient(to bottom, #2e3637 , #647375)");

            $("body").css("background", "#2e3637");
            $("#sectiontwo").css("background", "#2e3637");
        }
        if ($(".swiper-slide-active").hasClass("s-3")) {
            //            $("body").css("background", "linear-gradient(to bottom, #471f04 , #5e2905)");
            //            $("#sectiontwo").css("background", "linear-gradient(to bottom, #471f04 , #5e2905)");

            $("body").css("background", "#471f04");
            $("#sectiontwo").css("background", "#471f04");
        }
        if ($(".swiper-slide-active").hasClass("s-4")) {
            //            $("body").css("background", "linear-gradient(to bottom, #450018 , #6b0227)");
            //            $("#sectiontwo").css("background", "linear-gradient(to bottom, #450018 , #6b0227)");
            $("body").css("background", "#450018");
            $("#sectiontwo").css("background", "#450018");
        }
        if ($(".swiper-slide-active").hasClass("s-5")) {
            //            $("body").css("background", "linear-gradient(to bottom, #47200a , #632d0e)");
            //            $("#sectiontwo").css("background", "linear-gradient(to bottom, #47200a , #632d0e)");
            $("body").css("background", "#47200a");
            $("#sectiontwo").css("background", "#47200a");
        }
        if ($(".swiper-slide-active").hasClass("s-6")) {
            //            $("body").css("background", "linear-gradient(to bottom, #29425a , #345678)");
            //            $("#sectiontwo").css("background", "linear-gradient(to bottom, #29425a , #345678)");
            $("body").css("background", "#29425a");
            $("#sectiontwo").css("background", "#29425a");
        }
        if ($(".swiper-slide-active").hasClass("s-7")) {
            //            $("body").css("background", "linear-gradient(to bottom, #4a0021 , #780136)");
            //            $("#sectiontwo").css("background", "linear-gradient(to bottom, #4a0021 , #780136)");
            $("body").css("background", "#4a0021");
            $("#sectiontwo").css("background", "#4a0021");
        }
        if ($(".swiper-slide-active").hasClass("s-8")) {
            //            $("body").css("background", "linear-gradient(to bottom, #28012e , #4b0257)");
            //            $("#sectiontwo").css("background", "linear-gradient(to bottom, #28012e , #4b0257)");
            $("body").css("background", "#28012e");
            $("#sectiontwo").css("background", "#28012e");
        }
        if ($(".swiper-slide-active").hasClass("s-9")) {
            //            $("body").css("background", "linear-gradient(to bottom, #212a07 , #3e4f0d)");
            //            $("#sectiontwo").css("background", "linear-gradient(to bottom, #212a07 , #3e4f0d)");
            $("body").css("background", "#212a07");
            $("#sectiontwo").css("background", "#212a07");
        }
        if ($(".swiper-slide-active").hasClass("s-10")) {
            //            $("body").css("background", "linear-gradient(to bottom, #32210e , #4f3416)");
            //            $("#sectiontwo").css("background", "linear-gradient(to bottom, #32210e , #4f3416)");
            $("body").css("background", "#32210e");
            $("#sectiontwo").css("background", "#32210e");
        }
        if ($(".swiper-slide-active").hasClass("s-11")) {
            //            $("body").css("background", "linear-gradient(to bottom, #08424e , #0d6678)");
            //            $("#sectiontwo").css("background", "linear-gradient(to bottom, #08424e , #0d6678)");
            $("body").css("background", "#08424e");
            $("#sectiontwo").css("background", "#08424e");
        }
        if ($(".swiper-slide-active").hasClass("s-12")) {
            //            $("body").css("background", "linear-gradient(to bottom, #650137 , #91014f)");
            //            $("#sectiontwo").css("background", "linear-gradient(to bottom, #650137 , #91014f)");
            $("body").css("background", "#650137");
            $("#sectiontwo").css("background", "#650137");
        }
    });
    $(".planet-links").on("click", "div", function () {
        if ($(".swiper-pagination-bullet-active").text() == "Verve") {
            $("body").css("background", "#07334e");
            $("#sectiontwo").css("background", "#07334e");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Battle Of Bands") {
            $("body").css("background", "#2e3637");
            $("#sectiontwo").css("background", "#2e3637");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Symphony Idol") {
            $("body").css("background", "#471f04");
            $("#sectiontwo").css("background", "#471f04");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Decibels") {
            $("body").css("background", "#450018");
            $("#sectiontwo").css("background", "#450018");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Natsamrat") {
            $("body").css("background", "#47200a");
            $("#sectiontwo").css("background", "#47200a");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Ok Doodle") {
            $("body").css("background", "#29425a");
            $("#sectiontwo").css("background", "#29425a");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Picture This") {
            $("body").css("background", "#4a0021");
            $("#sectiontwo").css("background", "#4a0021");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Feel The Beat") {
            $("body").css("background", "#28012e");
            $("#sectiontwo").css("background", "#28012e");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Film Flick") {
            $("body").css("background", "#212a07");
            $("#sectiontwo").css("background", "#212a07");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Word Smith") {
            $("body").css("background", "#32210e");
            $("#sectiontwo").css("background", "#32210e");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Somaiya Got Talent") {
            $("body").css("background", "#08424e");
            $("#sectiontwo").css("background", "#08424e");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Mr. & Ms. Somaiya") {
            $("body").css("background", "#650137");
            $("#sectiontwo").css("background", "#650137");
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
            $("body").css("background", color);
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
            $("body").css("background", color);
            $("#sectiontwo").css("background", color);
        }
    }
    xD = null;
    yD = null;
};
