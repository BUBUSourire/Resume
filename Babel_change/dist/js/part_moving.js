"use strict";

!function () {
    //滚动延迟
    setTimeout(function () {
        findClosestAndMove();
    }, 1000);

    //添加滚动时的区块move（1）
    var specialTags = document.querySelectorAll("[data-x]"); //获取所有的区块
    for (var i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add("move");
    }

    window.addEventListener('scroll', function (e) {
        findClosestAndMove();
    });

    function findClosestAndMove() {
        //添加高亮
        var specialTags = document.querySelectorAll("[data-x]"); //获取所有的区块
        var minIndex = 0;
        for (var _i = 1; _i < specialTags.length; _i++) {
            if (Math.abs(specialTags[_i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
                //区块到区块顶部的距离减去卷曲出去的距离
                minIndex = _i;
            }
        }

        //添加滚动时的区块move（2）

        specialTags[minIndex].classList.remove("move"); //minIndex就是距离窗口顶部最近的元素
        //添加滚动式区块和导航下划线的高亮效果
        for (var _i2 = 0; _i2 < specialTags.length; _i2++) {
            specialTags[_i2].classList.remove("show");
        }
        specialTags[minIndex].classList.add("show");
        var id = specialTags[minIndex].id; //获取a标签的ID
        var a = document.querySelector('a[href="#' + id + '"]'); //获取a标签
        var li = a.parentNode; //获取a标签的所有父级li
        var liOther = li.parentNode.children;
        for (var _i3 = 0; _i3 < liOther.length; _i3++) {
            liOther[_i3].classList.remove("highlight");
        }
        li.classList.add("highlight");
    }
}.call();