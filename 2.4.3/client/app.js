var app = new Vue({
    el: '#app',
    data: {
        chat:[]
    },
    methods: {
        add:function(msg){
            this.chat.push(msg)
        }
    }
})