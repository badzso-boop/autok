var app = new Vue({
    el: '#main',
    data: {
        title: '',
        content: '',
        megye: '',
        type: '',
        Fhely: 0,
        picture: null,
        proba: null
    },
    methods: {
        feltoltes: function(event) {
            event.preventDefault();
            console.log('Cím: ' + this.title + '\nContent: ' + this.content + '\nMegye: ' + this.megye + '\nMegközelíthetőség: ' + this.type + '\nFérőhely: ' + this.Fhely);
            //send to the firebase server -> csak proba
            fetch('https://drivingpalace-default-rtdb.europe-west1.firebasedatabase.app/helyek.json', {
                method: 'POST',
                body: JSON.stringify({
                    title: this.title,
                    content: this.content,
                    megye: this.megye,
                    type: this.type,
                    Fhely: this.Fhely,
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
            this.Fhely = 0;
        },
        kepFeltolt: function(event) {
            this.picture = event.target.files[0];
            console.log(this.picture);
        }
    }
})