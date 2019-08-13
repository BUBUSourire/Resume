!function () {
    var view = View('nav.menu')
    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.initAnimation() //初始化动画
            this.bindEvents()
        },
        initAnimation: function () {//初始化动画
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        bindEvents: function (view) {
            var view = this.view
            //导航点击首页内跳转
            let aTigs = view.querySelectorAll("nav.menu>ul>li>a.pageNav");
            // Setup the animation loop.缓速动画============
            for (let i = 0; i < aTigs.length; i++) {
                aTigs[i].onclick = function (e) {
                    e.preventDefault();
                    //获取a链接的ID
                    let a = e.currentTarget;//获取当前点击的这个a
                    let href = a.getAttribute("href");//字符串类型
                    let ele = document.querySelector(href);//以字符串作为选择器，获取一个元素（点击a显示对应的区块）
                    let top = ele.offsetTop;//获取区块距离页面top的值

                    //增加缓速动画============
                    let currentTop = window.scrollY;//当前的位置（当前的位置到页面top的距离、卷曲出去的距离）
                    let targetTop = top - 80;
                    let s = targetTop - currentTop;//路程
                    let coords = { y: currentTop };//起始位置
                    let t = (s / 100) * 300//时间
                    if (t > 500) {
                        t = 500;
                    }
                    let tween = new TWEEN.Tween(coords)//起始位置
                        .to({ y: targetTop })//结束位置和时间
                        .easing(TWEEN.Easing.Quadratic.InOut)//缓动类型
                        .onUpdate(function () {
                            window.scrollTo(0, coords.y)//如何更新界面
                        })
                        .start(); // 开始缓动
                }
            }
        }
    }
    controller.init(view)


}.call()
