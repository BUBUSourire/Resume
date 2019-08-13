function my$(id) {
    return document.getElementById(id);
};

!function () {
    var view = View('#mySwiper')

    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function (view) {
            var view=this.view
            // 作品集开始
            let swiper = new Swiper(view.querySelector('.swiper-container'), {
                slidesPerView: 3,
                slidesPerColumn: 2,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            })
            // 作品集结束
        }
    }
    controller.init(view)

}.call()



