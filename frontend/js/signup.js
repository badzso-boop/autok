var app = new Vue({
    el: '#main',
    data: {
        reg: {
            uname: '',
            fullname: '',
            email: '',
            password: ''
        },
        log: {
            email: '',
            password: ''
        },
    },
    methods: {
        belepes: function() {
            event.preventDefault();
            console.log("Küldöm már ádó ;)")
            fetch('valahovaelkuldom.com', {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(this.log)
            })
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                console.log(myJson);
            });
        },
        regisztracio: function() {
            event.preventDefault();
            console.log("Küldöm már ádó ;)")
            fetch('valahovaelkuldom.com', {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(this.reg)
            })
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                console.log(myJson);
            });
        },
        sliderad: function() {
            const slider = document.getElementById("login-cover");
            slider.classList.add('slide');
        },
        sliderel: function() {
            const slider = document.getElementById("login-cover");
            slider.classList.remove('slide');
        }
    }
})