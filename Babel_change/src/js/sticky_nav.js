!function () {
    var view = View('#topNavBar')

    var controller = {
        view: null,
        init: function (view) {
            this.view = view,
                this.bindEvents()//绑定事件
        },
        //粘性导航
        bindEvents: function () {
            var view = this.view
            window.addEventListener('scroll', (e) => { //箭头函数没有this，内外this不变
                if (scrollY > 0) {
                   this.active()
                } else {
                    this.deactive()
                }
            })
        },
        active:function(){
            this.view.classList.add('sticky')
        },
        deactive:function(){
            this.view.classList.remove('sticky')
        }
    }
    controller.init(view)


    //下拉菜单
    let listTigs = document.querySelectorAll("nav.menu>ul>li");//获取所有的li
    for (let i = 0; i < listTigs.length; i++) {
        listTigs[i].onmouseenter = function (e) {
            e.currentTarget.classList.add("appear");
        }
        listTigs[i].onmouseleave = function (e) {
            e.currentTarget.classList.remove("appear");
        }
    }
}.call()
