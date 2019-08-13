/**
 * var view = View('选择器名称')
 */

window.View = function (selector) {
    return document.querySelector(selector)
}