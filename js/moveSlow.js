!function () {
    //滚动延迟
    setTimeout(function () {
        findClosestAndMove();
    }, 1000);

    //添加滚动时的区块move（1）
    let specialTags = document.querySelectorAll("[data-x]");//获取所有的区块
    console.log(specialTags)
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add("move");
    }

    window.addEventListener('scroll', function (e) {
        findClosestAndMove()
    })

    function findClosestAndMove() {

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
    }

}.call()