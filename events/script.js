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

//setTimeout(() => {
//    $(".preloader-anim").addClass("hidden");
//    $(".outer").removeClass('hidden');
//    $(".loader-gif").removeClass(".loader-gif");
//}, 4000);

$(function () {
    $("#sectiontwo").css("background-color", "#07334e");
    window.addEventListener("wheel", function () {
        if ($(".swiper-slide-active").hasClass("s-1")) {
            $("#sectiontwo").css("background-color", "#07334e");
        }
        if ($(".swiper-slide-active").hasClass("s-2")) {
            $("#sectiontwo").css("background-color", "#2e3637");
        }
        if ($(".swiper-slide-active").hasClass("s-3")) {
            $("#sectiontwo").css("background-color", "#471f04");
        }
        if ($(".swiper-slide-active").hasClass("s-4")) {
            $("#sectiontwo").css("background-color", "#450018");
        }
        if ($(".swiper-slide-active").hasClass("s-5")) {
            $("#sectiontwo").css("background-color", "#47200a");
        }
        if ($(".swiper-slide-active").hasClass("s-6")) {
            $("#sectiontwo").css("background-color", "#29425a");
        }
        if ($(".swiper-slide-active").hasClass("s-7")) {
            $("#sectiontwo").css("background-color", "#4a0021");
        }
        if ($(".swiper-slide-active").hasClass("s-8")) {
            $("#sectiontwo").css("background-color", "#28012e");
        }
        if ($(".swiper-slide-active").hasClass("s-9")) {
            $("#sectiontwo").css("background-color", "#212a07");
        }
        if ($(".swiper-slide-active").hasClass("s-10")) {
            $("#sectiontwo").css("background-color", "#32210e");
        }
        if ($(".swiper-slide-active").hasClass("s-11")) {
            $("#sectiontwo").css("background-color", "#08424e");
        }
        if ($(".swiper-slide-active").hasClass("s-12")) {
            $("#sectiontwo").css("background-color", "#650137");
        }
    });
    $(".planet-links").on("click", "div", function () {
        if ($(".swiper-pagination-bullet-active").text() == "Verve") {
            $("#sectiontwo").css("background-color", "#07334e");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Battle Of Bands") {
            $("#sectiontwo").css("background-color", "#2e3637");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Symphony Idol") {
            $("#sectiontwo").css("background-color", "#471f04");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Decibels") {
            $("#sectiontwo").css("background-color", "#450018");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Natsamrat") {
            $("#sectiontwo").css("background-color", "#47200a");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Ok Doodle") {
            $("#sectiontwo").css("background-color", "#29425a");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Picture This") {
            $("#sectiontwo").css("background-color", "#4a0021");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Feel The Beat") {
            $("#sectiontwo").css("background-color", "#28012e");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Film Flick") {
            $("#sectiontwo").css("background-color", "#212a07");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Word Smith") {
            $("#sectiontwo").css("background-color", "#32210e");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Somaiya Got Talent") {
            $("#sectiontwo").css("background-color", "#08424e");
        }
        if ($(".swiper-pagination-bullet-active").text() == "Mr. & Ms. Somaiya") {
            $("#sectiontwo").css("background-color", "#650137");
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
        console.log(question);
        question.classList.toggle('show-text');
    });
});
