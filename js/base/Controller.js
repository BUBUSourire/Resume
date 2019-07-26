window.Controller = function () {

    return {
        view: null,
        model: null,
        init: function (view, model) {
            this.view = view
            this.model = model
            this.model.init()
            this.bindEvents()

        },

        bindEvents: function () { }

    }
}