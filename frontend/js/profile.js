var app = new Vue({
    el: '#main',
    data: {
        //adatok menupont
        felhasznalo: 'Szamjli01',
        pPicture: 'profile',
        cPicture: 'car',
        leiras: 'Norbi vagyok a legjobbképü csávó Veszprémben',
        email: 'norbert.ujj@gmail.com',
        fullname: 'Ujj Norbert',
        groups: [
                    {id: 0, name: 'Hungarian car club'},
                ],
        cim: 'Felhasználói profil',

        //oldalakkal kapcsolatos
        alcim: 'Adatok',
        gomb: 'Szerkesztés',
        szerk: true, //fordított logika
        adatok: true,
        utjaim: false,
        helyszineim: false,
        rendezveny: false,
        galeria: false,
        utak: [
                {id: 0,userid: 0,picture: 'sample',title: `Rátót`,content: 'Rohadt jó út rátót fele. Ez egy jó út!',length: 15,megye: 'Veszprém',type: 'szerpentín',quality: 'kiválló',nezetseg: 15,date: '2021.04.29 18:30', edit: false, gomb: 'Szerkesztés'},
                {id: 1,userid: 0,picture: 'sample',title: `Rátót`,content: 'Rohadt jó út rátót fele. Ez egy jó út!',length: 15,megye: 'Veszprém',type: 'szerpentín',quality: 'kiválló',nezetseg: 15,date: '2021.04.29 18:30', edit: false, gomb: 'Szerkesztés'},
                {id: 2,userid: 0,picture: 'sample',title: `Rátót`,content: 'Rohadt jó út rátót fele. Ez egy jó út!',length: 15,megye: 'Veszprém',type: 'szerpentín',quality: 'kiválló',nezetseg: 15,date: '2021.04.29 18:30', edit: false, gomb: 'Szerkesztés'},
                {id: 3,userid: 0,picture: 'sample',title: `Rátót`,content: 'Rohadt jó út rátót fele. Ez egy jó út!',length: 15,megye: 'Veszprém',type: 'szerpentín',quality: 'kiválló',nezetseg: 15,date: '2021.04.29 18:30', edit: false, gomb: 'Szerkesztés'},
                {id: 4,userid: 0,picture: 'sample',title: `Rátót`,content: 'Rohadt jó út rátót fele. Ez egy jó út!',length: 15,megye: 'Veszprém',type: 'szerpentín',quality: 'kiválló',nezetseg: 15,date: '2021.04.29 18:30', edit: false, gomb: 'Szerkesztés'},


              ],
        helyek: [
                    {id: 0,userid: 0,picture: 'sample',title: 'Szabadja Halott város',content: 'Olyan mintha visszamennénk a 80-s évekbe egyszerűen imádom!',megye: 'Veszprém',kozelithetoseg: 'könnyen',nezetseg: 15,hely: 50,date: '2021.04.29 18:30', edit: false, gomb: 'Szerkesztés'},
                    {id: 1,userid: 0,picture: 'sample',title: 'Szabadja Halott város',content: 'Olyan mintha visszamennénk a 80-s évekbe egyszerűen imádom!',megye: 'Veszprém',kozelithetoseg: 'könnyen',nezetseg: 15,hely: 50,date: '2021.04.29 18:30', edit: false, gomb: 'Szerkesztés'},
                    {id: 2,userid: 0,picture: 'sample',title: 'Szabadja Halott város',content: 'Olyan mintha visszamennénk a 80-s évekbe egyszerűen imádom!',megye: 'Veszprém',kozelithetoseg: 'könnyen',nezetseg: 15,hely: 50,date: '2021.04.29 18:30', edit: false, gomb: 'Szerkesztés'},
                    {id: 3,userid: 0,picture: 'sample',title: 'Szabadja Halott város',content: 'Olyan mintha visszamennénk a 80-s évekbe egyszerűen imádom!',megye: 'Veszprém',kozelithetoseg: 'könnyen',nezetseg: 15,hely: 50,date: '2021.04.29 18:30', edit: false, gomb: 'Szerkesztés'},
                    {id: 4,userid: 0,picture: 'sample',title: 'Szabadja Halott város',content: 'Olyan mintha visszamennénk a 80-s évekbe egyszerűen imádom!',megye: 'Veszprém',kozelithetoseg: 'könnyen',nezetseg: 15,hely: 50,date: '2021.04.29 18:30', edit: false, gomb: 'Szerkesztés'},

                ],
    },mounted: function() {
        this.proba();
    },
    methods: {
        proba: function() {
            console.log('hali ' + this.felhasznalo);
            /*
            fetch('http://example.com/songs')
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(err => console.error(err));
            */
        },
        szerkMent: function(x) {
            if(this.gomb == 'Szerkesztés')
            {
                //felhasznaloi profilhoz
                this.gomb = 'Mentés'; 
                this.szerk = false;

                //utakhoz
                this.utak[x].edit = !this.utak[x].edit
                this.utak[x].gomb = 'Mentés'

                //helyekhez
                this.helyek[x].edit = !this.helyek[x].edit
                this.helyek[x].gomb = 'Mentés'
            }else {
                //felhasznaloi profilhoz
                this.gomb = 'Szerkesztés';
                this.szerk = true;

                //utakhoz
                this.utak[x].edit = !this.utak[x].edit
                this.utak[x].gomb = 'Szerkesztés'

                //helyekhez
                this.helyek[x].edit = !this.helyek[x].edit
                this.helyek[x].gomb = 'Szerkesztés'
            }
        },
        Madatok: function() {
            this.alcim = 'Adatok';
            this.adatok = true;
            this.utjaim = false;
            this.helyszineim = false;
            this.rendezveny = false;
            this.galeria = false;
        },
        Mutjaim: function() {
            this.alcim = 'Útjaim';
            this.adatok = false;
            this.utjaim = true;
            this.helyszineim = false;
            this.rendezveny = false;
            this.galeria = false;
            //Ide majd egy fetch fog jönni ami csak azokat az 
            //id-ju utakat szedi le ami a felhasznaloe
        },
        Mhelyszinek: function() {
            this.alcim = 'Helyszíneim';
            this.adatok = false;
            this.utjaim = false;
            this.helyszineim = true;
            this.rendezveny = false;
            this.galeria = false;
            //Ide majd egy fetch fog jönni ami csak azokat az 
            //id-ju helyeket szedi le ami a felhasznaloe
        }
    }
})