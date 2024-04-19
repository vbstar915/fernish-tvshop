var sliderThumbnail = new Swiper('.slider-thumbnail', {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 10,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        640: {
            slidesPerView: 4,
        },
    }
});
var slider = new Swiper('.slider', {
    thumbs: {
        swiper: sliderThumbnail
    }
});