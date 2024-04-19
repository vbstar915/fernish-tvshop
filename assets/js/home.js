const heroSlider = new Swiper('.hero-slider', {
    direction: 'horizontal',
    speed: 400,
    slidesPerView: 1,
    autoHeight: false,
    effect: 'slide',
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 5000000000000000000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    paginationType: "bullets",
})

const followSlider = new Swiper('.follow-slider', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 16,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        576: {
            slidesPerView: 2,
        },
        // when window width is >= 480px
        760: {
            slidesPerView: 3,
        },
        // when window width is >= 640px
        980: {
            slidesPerView: 4,
        },
    }
}) 