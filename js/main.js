function my$(id) {
    return document.getElementById(id);
};

// 作品集开始
let swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// 作品集结束

