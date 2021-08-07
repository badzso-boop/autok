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
            //send to the firebase server
            fetch('https://drivingpalace-default-rtdb.europe-west1.firebasedatabase.app/utak.json', {
                method: 'POST',
                body: JSON.stringify({
                    title: this.title,
                    content: this.content,
                    megye: this.megye,
                    type: this.type,
                    quality: this.quality,
                    length: this.length,
                    picture: 'not ready yet',
                })
            })
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                console.log(myJson);
            });

            this.title = null;
            this.content = null;
            this.megye = '';
            this.type = '';
            this.quality = '';
            this.length = 0;
        },
        kepFeltolt: function(event) {
            this.picture = event.target.files[0];
            console.log(this.picture);
        }
    }
})