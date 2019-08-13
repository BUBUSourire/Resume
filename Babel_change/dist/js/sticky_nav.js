'use strict';

!function () {
    var view = View('#topNavBar');

    var controller = {
        view: null,
        init: function init(view) {
            this.view = view, this.bindEvents(); //绑定事件
        },
        //粘性导航
        bindEvents: function bindEvents() {
            var _this = this;

            var view = this.view;
            window.addEventListener('scroll', function (e) {
                //箭头函数没有this，内外this不变
                if (scrollY > 0) {
                    _this.active();
                } else {
                    _this.deactive();
                }
            });
        },
        active: function active() {
            this.view.classList.add('sticky');
        },
        deactive: function deactive() {
            this.view.classList.remove('sticky');
        }
    };
    controller.init(view);

    //下拉菜单
    var listTigs = document.querySelectorAll("nav.menu>ul>li"); //获取所有的li
    for (var i = 0; i < listTigs.length; i++) {
        listTigs[i].onmouseenter = function (e) {
            e.currentTarget.classList.add("appear");
        };
        listTigs[i].onmouseleave = function (e) {
            e.currentTarget.classList.remove("appear");
        };
    }
}.call();