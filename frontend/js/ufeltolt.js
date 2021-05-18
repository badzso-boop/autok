var app = new Vue({
    el: '#main',
    data() {
        return {
            title: '',
            content: '',
            megye: '',
            type: '',
            quality: '',
            length: 0,
            picture: null,
        }
    },
    methods: {
        feltoltes: function(event) {
            event.preventDefault();
            console.log('Cím: ' + this.title + '\nLeírás: ' + this.content + '\nMegye: ' + this.megye + '\nTípus: ' + this.type + '\nMinőség:' + this.quality + '\nLength: ' + this.length + '\nKép:' + this.picture.name)
        },
        kepFeltolt: function(event) {
            this.picture = event.target.files[0];
            console.log(this.picture);
        }
    }
})