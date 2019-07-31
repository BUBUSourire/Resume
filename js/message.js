!function () {
    //视图===========================================
    var view = View('#siteMessage')

    //操作数据库=====================================
    var model = Model({resourceName:'Message'})

    //控制===========================================
    var controller=Controller({
        init:function(view,controller){
            this.messageList = view.querySelector('#messageList')
            this.myForm = view.querySelector('#postMessageForm')
            this.runMessages()
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
            this.model.save({
                'name':name, 
                'content':content}).then(
                function (object) {
                    window.location.reload()  //成功后自动刷新页面
                    myForm.querySelector('input[name=content]').value = ''
                })
        }

    })

    controller.init(view, model)

}.call()

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