//添加滚动时的区块move（1）
let specialTags = document.querySelectorAll("[data-x]");//获取所有的区块
for (let i = 0; i < specialTags.length; i++) {
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
    let specialTags = document.querySelectorAll("[data-x]");//获取所有的区块
    let minIndex = 0;
    for (let i = 1; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            //区块到区块顶部的距离减去卷曲出去的距离
            minIndex = i;
        }
    }

    //添加滚动时的区块move（2）

    specialTags[minIndex].classList.remove("move");//minIndex就是距离窗口顶部最近的元素
    //添加滚动式区块和导航下划线的高亮效果
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.remove("show");
    }
    specialTags[minIndex].classList.add("show");
    let id = specialTags[minIndex].id;//获取a标签的ID
    let a = document.querySelector('a[href="#' + id + '"]');//获取a标签
    let li = a.parentNode;//获取a标签的所有父级li
    let liOther = li.parentNode.children;
    for (let i = 0; i < liOther.length; i++) {
        liOther[i].classList.remove("highlight");
    }
    li.classList.add("highlight");
}