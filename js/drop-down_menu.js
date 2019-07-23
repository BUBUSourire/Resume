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