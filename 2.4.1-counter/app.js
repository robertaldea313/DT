var app = new Vue({
    el: '#app',
    data: {
       counter:0
    },
methods: {
	increment: function()
		{
			console.log(this.counter);
			if (this.counter<10)
					(this.counter++);
		},
  decrement: function()
		{
			console.log(this.counter);
			if (this.counter>0)
					(this.counter--);
		}
	}
})
