var app = new Vue({
    el: '#main',
    data: {
        nev: '',
        email: '',
        szoveg: '',
    },
    methods: {
        kuldes: function() {
            console.log('Név:' + this.nev + ', E-mail: ' + this.email + ', Szoveg: ' + this.szoveg);


            //elküldöm majd a szerónak
            fetch('adamszervere/kapcsolat')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                //Logolom a választ
                console.log(myJson);
            });
        }
    }
})