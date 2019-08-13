/**
 * var model = Model ({
 * resourceName:'表名'
 * })
 */

window.Model = function (options) {
    let resourceName = options.resourceName
    return {
        init: function () {
            var APP_ID = 'HJU7ymq2AK0eLxt56zApolMP-gzGzoHsz'
            var APP_KEY = 'VnF9ruEhOwj1RQpg7EWjpryf'
            AV.init({ appId: APP_ID, appKey: APP_KEY })
        },
        //获取数据
        fetch: function () {
            var query = new AV.Query(resourceName);
            return query.find() //返回一个promise对象
        },
        //保存数据
        save: function (object) {
            var x = AV.Object.extend(resourceName)//创建表，表名（resourceName）
            var y = new x()//在表中创建一行数据
            return y.save(object)
        }
    }


}