"use strict";

!function () {
    var view = View('nav.menu');
    var controller = {
        view: null,
        init: function init(view) {
            this.view = view;
            this.initAnimation(); //初始化动画
            this.bindEvents();
        },
        initAnimation: function initAnimation() {
            //初始化动画
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        bindEvents: function bindEvents(view) {
            var view = this.view;
            //导航点击首页内跳转
            var aTigs = view.querySelectorAll("nav.menu>ul>li>a.pageNav");
            // Setup the animation loop.缓速动画============
            for (var i = 0; i < aTigs.length; i++) {
                aTigs[i].onclick = function (e) {
                    e.preventDefault();
                    //获取a链接的ID
                    var a = e.currentTarget; //获取当前点击的这个a
                    var href = a.getAttribute("href"); //字符串类型
                    var ele = document.querySelector(href); //以字符串作为选择器，获取一个元素（点击a显示对应的区块）
                    var top = ele.offsetTop; //获取区块距离页面top的值

                    //增加缓速动画============
                    var currentTop = window.scrollY; //当前的位置（当前的位置到页面top的距离、卷曲出去的距离）
                    var targetTop = top - 80;
                    var s = targetTop - currentTop; //路程
                    var coords = { y: currentTop }; //起始位置
                    var t = s / 100 * 300; //时间
                    if (t > 500) {
                        t = 500;
                    }
                    var tween = new TWEEN.Tween(coords) //起始位置
                    .to({ y: targetTop }) //结束位置和时间
                    .easing(TWEEN.Easing.Quadratic.InOut) //缓动类型
                    .onUpdate(function () {
                        window.scrollTo(0, coords.y); //如何更新界面
                    }).start(); // 开始缓动
                };
            }
        }
    };
    controller.init(view);
}.call();