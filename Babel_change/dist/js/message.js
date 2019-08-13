'use strict';

!function () {
    //视图===========================================
    var view = View('#siteMessage');

    //操作数据库=====================================
    var model = Model({ resourceName: 'Message' });

    //控制===========================================
    var controller = Controller({
        init: function init(view, controller) {
            this.messageList = view.querySelector('#messageList');
            this.myForm = view.querySelector('#postMessageForm');
            this.runMessages();
        },
        runMessages: function runMessages() {
            var _this = this;

            //将留言内容显示在页面
            this.model.fetch().then(function (messages) {
                var array = messages.map(function (item) {
                    return item.attributes;
                }); //注意map用法，创建键值对，存储客户传进的留言,形成数组
                array.reverse();
                array.forEach(function (item) {
                    //遍历数组，对每一项进行操作
                    var li = document.createElement('li');
                    li.innerText = item.name + ': ' + item.content;
                    _this.messageList.append(li);
                });
            });
        },
        bindEvents: function bindEvents() {
            var _this2 = this;

            //监听用户提交事件--监听form
            this.myForm.addEventListener('submit', function (e) {
                e.preventDefault(); //清除默认样式
                _this2.saveMessage();
            });
        },
        saveMessage: function saveMessage() {
            //保存数据到数据库
            var myForm = this.myForm;
            var content = myForm.querySelector('input[name=content]').value; //获取用户输入的内容
            var name = myForm.querySelector('input[name=name]').value;
            this.model.save({
                'name': name,
                'content': content }).then(function (object) {
                window.location.reload(); //成功后自动刷新页面
                myForm.querySelector('input[name=content]').value = '';
            });
        }

    });

    controller.init(view, model);
}.call();

/**
    * controller就是Controller return 的东西 （即object）  
    * ->  controller === object
    * 
    * controller.init(view, model)中的this就是controller，即this是object
    * ->  controller === object === controller.init(view, model)中this
    * 
    * initB.call(this) 此this为就是上文中的this，就是object
    * -> controller === object === controller.init(view, model)中this === initB.call(this)
    */