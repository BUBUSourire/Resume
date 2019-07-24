var APP_ID = 'HJU7ymq2AK0eLxt56zApolMP-gzGzoHsz';
var APP_KEY = 'VnF9ruEhOwj1RQpg7EWjpryf';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

//监听用户提交事件--监听form
let myForm = document.querySelector('#postMessageForm')
myForm.addEventListener('submit', (e) => {
    e.preventDefault()//清除默认样式
    let content = myForm.querySelector('input[name=content]').value//获取用户输入的内容
    let name = myForm.querySelector('input[name=name]').value
    var Message = AV.Object.extend('Message')//创建表，表名为Message
    var message = new Message()//在表中创建一行数据
    message.save({
        'name':name,
        'content': content
    }).then(function (object) {
        // alert('提交成功')
        // let li = document.createElement('li')
        // li.innerText = `${object.attributes.name}: ${object.attributes.content}`
        // let messageList = document.querySelector('#messageList')
        // messageList.append(li)
        window.location.reload()  //成功后自动刷新页面
        
        myForm.querySelector('input[name=content]').value=''
    })
})

//将留言内容显示在页面
var query = new AV.Query('Message');
query.find().then(function (messages) {
    //  console.log(messages)
    let array = messages.map((item) => item.attributes)//注意map用法，创建键值对，存储客户传进的留言,形成数组
    array.reverse()
    array.forEach((item) => {//遍历数组，对每一项进行操作
        let li = document.createElement('li')
        li.innerText = `${item.name}: ${item.content}`
        let messageList = document.querySelector('#messageList')
        messageList.append(li)
    })
})
