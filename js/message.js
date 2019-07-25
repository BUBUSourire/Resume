!function () {
    //视图===========================================
    var view = document.querySelector('#siteMessage')

    //操作数据库=====================================
    var model = {
        //初始化
        init: function () {
            var APP_ID = 'HJU7ymq2AK0eLxt56zApolMP-gzGzoHsz'
            var APP_KEY = 'VnF9ruEhOwj1RQpg7EWjpryf'
            AV.init({ appId: APP_ID, appKey: APP_KEY })
        },
        //获取数据
        fetch: function () {
            var query = new AV.Query('Message');
            return query.find() //返回一个promise对象
        },
        //保存数据
        save: function (name, content) {
            var Message = AV.Object.extend('Message')//创建表，表名为Message
            var message = new Message()//在表中创建一行数据
            return message.save({ //返回一个promise对象
                'name': name,
                'content': content
            })
        }
    }

    //控制===========================================
    var controller = {
        view: null,
        model: null,
        messageList: null,
        init: function (view, model) {
            this.view = view
            this.model = model

            this.messageList = view.querySelector('#messageList')
            this.myForm = view.querySelector('#postMessageForm')
            this.model.init()
            this.bindEvents()
            this.runMessages()
        },

        bindEvents: function () {//监听用户提交事件--监听form
            this.myForm.addEventListener('submit', (e) => {
                e.preventDefault()//清除默认样式
                this.saveMessage()
            })
        },
        saveMessage: function () { //保存数据到数据库
            let myForm = this.myForm
            let content = myForm.querySelector('input[name=content]').value//获取用户输入的内容
            let name = myForm.querySelector('input[name=name]').value
            this.model.save(name, content).then(
                function (object) {
                    window.location.reload()  //成功后自动刷新页面
                    myForm.querySelector('input[name=content]').value = ''
                })
        },
        runMessages: function () { //将留言内容显示在页面
            this.model.fetch().then(
                (messages) => {
                    let array = messages.map((item) => item.attributes)//注意map用法，创建键值对，存储客户传进的留言,形成数组
                    array.reverse()
                    array.forEach((item) => {//遍历数组，对每一项进行操作
                        let li = document.createElement('li')
                        li.innerText = `${item.name}: ${item.content}`
                        this.messageList.append(li)
                    })
                })
        },

    }

    controller.init(view, model)

}.call()
