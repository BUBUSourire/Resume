function my$(id) {
    return document.getElementById(id);
};

// 加载动画
setTimeout(function () {
    my$("load").className = ("active");
}, 2000)

//顶部导航栏==================================================================================================
//添加滚动时的区块move（1）
var specialTags = document.querySelectorAll("[data-x]");//获取所有的区块
for (var i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add("move");
}
//滚动延迟
setTimeout(function () {
    ooo();
}, 1000);
//粘性导航
window.onscroll = function () { //鼠标滚动事件
    if (scrollY > 0) {
        my$("topNavBar").classList.add('sticky');
    } else {
        my$("topNavBar").classList.remove('sticky');
    }
    ooo();
}
function ooo() {
    //添加高亮
    var specialTags = document.querySelectorAll("[data-x]");//获取所有的区块
    var minIndex = 0;
    for (var i = 1; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            //区块到区块顶部的距离减去卷曲出去的距离
            minIndex = i;
        }
    }

    //添加滚动时的区块move（2）

    specialTags[minIndex].classList.remove("move");//minIndex就是距离窗口顶部最近的元素
    //添加滚动式区块和导航下划线的高亮效果
    for (var i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.remove("show");
    }
    specialTags[minIndex].classList.add("show");
    var id = specialTags[minIndex].id;//获取a标签的ID
    var a = document.querySelector('a[href="#' + id + '"]');//获取a标签
    var li = a.parentNode;//获取a标签的所有父级li
    var liOther = li.parentNode.children;
    for (var i = 0; i < liOther.length; i++) {
        liOther[i].classList.remove("highlight");
    }
    li.classList.add("highlight");
}

//下拉菜单
var listTigs = document.querySelectorAll("nav.menu>ul>li");//获取所有的li
for (var i = 0; i < listTigs.length; i++) {
    listTigs[i].onmouseenter = function (e) {
        e.currentTarget.classList.add("appear");
    }
    listTigs[i].onmouseleave = function (e) {
        e.currentTarget.classList.remove("appear");
    }
}

//导航点击首页内跳转
var aTigs = document.querySelectorAll("nav.menu>ul>li>a.pageNav");

// Setup the animation loop.缓速动画============
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

for (var i = 0; i < aTigs.length; i++) {
    aTigs[i].onclick = function (e) {
        e.preventDefault();
        //获取a链接的ID
        var a = e.currentTarget;//获取当前点击的这个a
        var href = a.getAttribute("href");//字符串类型
        var ele = document.querySelector(href);//以字符串作为选择器，获取一个元素（点击a显示对应的区块）
        var top = ele.offsetTop;//获取区块距离页面top的值

        //增加缓速动画============
        var currentTop = window.scrollY;//当前的位置（当前的位置到页面top的距离、卷曲出去的距离）
        var targetTop = top - 80;
        var s = targetTop - currentTop;//路程
        var coords = { y: currentTop };//起始位置
        var t = (s / 100) * 300//时间
        if (t > 500) {
            t = 500;
        }
        var tween = new TWEEN.Tween(coords)//起始位置
            .to({ y: targetTop })//结束位置和时间
            .easing(TWEEN.Easing.Quadratic.InOut)//缓动类型
            .onUpdate(function () {
                window.scrollTo(0, coords.y)//如何更新界面
            })
            .start(); // 开始缓动
    }
}
//顶部导航栏end===================================================================================

// 作品集
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

