var app = new Vue({
    el: '#main',
    data: {
        title: '',
        content: '',
        megye: '',
        tipus: '',
        Fhely: 0,
        picture: null,
        proba: null
    },
    methods: {
        feltoltes: function(event) {
            event.preventDefault();
            console.log('Cím: ' + this.title + '\nContent: ' + this.content + '\nMegye: ' + this.megye + '\nMegközelíthetőség: ' + this.tipus + '\nFérőhely: ' + this.Fhely);
        },
        kepFeltolt: function(event) {
            this.picture = event.target.files[0];
            console.log(this.picture);
        }
    }
})