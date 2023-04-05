var app = new Vue({
    el: '#app',
    data: {
        name:'',
        city:'',
        users: [],
        usersService: null
    },
    created: function () {
        this.usersService = users();
        this.usersService.get().then(response => (this.users = response.data));
    },
    methods: {
        del: function(msg){
            this.users.splice(msg,1)
        },
        add:function(){
            this.users.push({name: this.name,city: this.city})
        },
        modify:function(msg){
            this.users.splice(msg,1,{name: this.name,city: this.city})
        }
    }
})