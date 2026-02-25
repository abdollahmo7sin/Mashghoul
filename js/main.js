jQuery(document).ready(function () {


    // toggle search form
    const searchTrigger = document.querySelector('.search-icon'),
        searchForm = document.querySelector('.search-form-wrapper');
    searchTrigger.addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.toggle('active');
        searchForm.classList.toggle('active');
    })

    // nested nav mobile
    if (jQuery(window).width() <= 992) {
        jQuery(".menu-item-has-children").click(function () {
            const $this = jQuery(this);
            $this.children(".sub-menu").slideToggle(300);
            $this.children("a").toggleClass("icon-rotate");
            jQuery(".menu-item-has-children").not($this).children(".sub-menu").slideUp(300);
            jQuery(".menu-item-has-children").not($this).children("a").removeClass("icon-rotate");
        });
    }

    // ************************************************************************************************
    // open and close sidebar

    jQuery(".bars").on("click", function () {
        jQuery(".line1").toggleClass("rotate-line1");
        jQuery(".line2").toggleClass("hide-line2");
        jQuery(".line3").toggleClass("rotate-line3");
        jQuery(".navigation").toggleClass("open-sidebar");
        jQuery("body").toggleClass("overflow-hidden");
    });


    // ************************************************************************************************
    // show and hide to top button

    jQuery(window).on("scroll", function () {
        if (jQuery(window).scrollTop() > 100) {
            jQuery(".up-btn").addClass("show");
        }
        if (jQuery(window).scrollTop() == 0) {
            jQuery(".up-btn").removeClass("show");
        }
    });

    jQuery(".up-btn").on("click", function () {
        jQuery("html , body").animate({ scrollTop: 0 }, 0);
    });



    // ************************************************************************************************
    // swiper slider


    const shopByCategorySwiper = new Swiper(".shop-by-category-swiper", {
        loop: true,
        draggable: true,
        autoplay: true,
        spaceBetween: 45,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            350: {
                slidesPerView: 2,
                spaceBetween: 15,

            },
            500: {
                slidesPerView: 2,
                spaceBetween: 20,

            },
            768: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 24,
            },
        },

    });



    const productsSwiper = new Swiper(".products-swiper", {
        loop: true,
        draggable: true,
        autoplay: true,
        spaceBetween: 24,
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            350: {
                slidesPerView: 2,
                spaceBetween: 15,
                navigation: false,

            },
            500: {
                slidesPerView: 2,
                spaceBetween: 24,
                navigation: false,

            },
            768: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },

    });

    const testimonialsSwiper = new Swiper(".testimonials-swiper", {
        loop: true,
        draggable: true,
        autoplay: true,
        spaceBetween: 45,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            350: {
                slidesPerView: 1,
                spaceBetween: 15,
                navigation: false,

            },
            500: {
                slidesPerView: 1,
                spaceBetween: 20,
                navigation: false,

            },
            768: {
                slidesPerView: 1.5,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 45,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 45,
            },
        },

    });

    const blogsSwiper = new Swiper(".blogs-swiper", {
        loop: true,
        draggable: true,
        autoplay: true,
        spaceBetween: 45,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            350: {
                slidesPerView: 1,
                spaceBetween: 15,
                navigation: false,

            },
            500: {
                slidesPerView: 1,
                spaceBetween: 20,
                navigation: false,

            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 45,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 45,
            },
        },

    });
    const workshopSwiper = new Swiper(".workshop-swiper", {
        loop: true,
        draggable: true,
        autoplay: true,
        spaceBetween: 45,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },

        breakpoints: {
            350: {
                slidesPerView: 1,
                spaceBetween: 15,
                navigation: false,

            },
            500: {
                slidesPerView: 1,
                spaceBetween: 20,
                navigation: false,

            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 45,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 45,
            },
        },

    });


    /*Faq Accordion*/

    $(".faq-title").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        const $this = $(this);
        const $content = $this.next('.faq-content');
        const isCurrentlyActive = $this.hasClass("active");

        // Close all other FAQ items first
        $(".faq-title").not($this).removeClass("active");
        $(".faq-content").not($content).slideUp(300);

        // Toggle current item
        if (!isCurrentlyActive) {
            $this.addClass("active");
            $content.slideDown(300);
        } else {
            $this.removeClass("active");
            $content.slideUp(300);
        }

        return false;
    });

    // Footer Accordion
    $(".footer-title").on("click", function () {
        if ($(window).width() <= 767) {
            const $this = $(this);
            $this.toggleClass("active");
            $this.next("ul").slideToggle(300);
        }
    });

    $(window).on("resize", function () {
        if ($(window).width() > 767) {
            $(".footer-title").removeClass("active");
            $(".footer-title").next("ul").removeAttr("style");
        }
    });

    // User Menu Toggle for Mobile
    $(".user-menu-toggle").on("click", function () {
        if ($(window).width() <= 991) {
            const $this = $(this);
            $this.toggleClass("active");
            $this.closest(".user-menu").find(".menu-list").slideToggle(300);
        }
    });

    $(window).on("resize", function () {
        if ($(window).width() > 991) {
            $(".user-menu-toggle").removeClass("active");
            $(".menu-list").removeAttr("style");
        }
    });

    // OTP Modal Logic
    const registerForm = document.querySelector('.login-main-form');
    const otpModal = document.getElementById('otp-modal');

    if (registerForm && otpModal) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Stop standard form submission
            const bsModal = new bootstrap.Modal(otpModal);
            bsModal.show();
        });
    }

    // OTP Input Auto-focus Logic
    const otpInputs = document.querySelectorAll('.otp-input');
    otpInputs.forEach((input, index) => {
        input.addEventListener('input', function () {
            if (this.value.length === this.maxLength && index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
        });

        // Handle backspace to focus previous input
        input.addEventListener('keydown', function (e) {
            if (e.key === 'Backspace' && this.value.length === 0 && index > 0) {
                otpInputs[index - 1].focus();
            }
        });
    });


});
// wow animation
document.addEventListener("DOMContentLoaded", function () {

    const singleElements = document.querySelectorAll('section ,h1, h2, h3');
    singleElements.forEach(el => {
        el.classList.add('wow', 'fadeInUp');
    });


    const staggeredItems = document.querySelectorAll('.single-faq-item,.single-blog-card,.single-product-card,.single-testimonial-card,.single-category-card');

    staggeredItems.forEach((el, index) => {
        el.classList.add('wow', 'fadeInUp');

        let delayMultiplier = index % 3;

        if (delayMultiplier > 0) {
            el.setAttribute('data-wow-delay', `${delayMultiplier * 0.2}s`);
        }
    });

    if (typeof WOW !== 'undefined') {
        new WOW({
            boxClass: 'wow',
            offset: 50,
            mobile: true,
            live: true
        }).init();
    }
});