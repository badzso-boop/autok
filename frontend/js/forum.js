//Kategoria ID
let kI = 7;
//Topik ID
let tI = 0;
//Komment ID
let cI = 10;
var app = new Vue({
    el: '#main',
    data: {
        //felhasználó adatok
        felhasznalo: '',
        beosztas: '',

        //oldallal kapcsolatos
        kategoria: [
            {id: 0,cim: 'Autók', date: '2021.03.01'},
            {id: 1,cim: 'Motorok', date: '2021.03.01'},
            {id: 2,cim: 'Szerelés', date: '2021.03.01'},
            {id: 3,cim: 'Cruising', date: '2021.03.01'},
            {id: 4,cim: 'Találkozók', date: '2021.03.01'},
            {id: 5,cim: 'Társalgás', date: '2021.03.01'},
            {id: 6,cim: 'Egyéb', date: '2021.03.01'},
        ],
        topikok: [
            {kId: 0,id: 0,cim: 'Kezdő autók', date: '2021.03.01', kSzam: 129},
            {kId: 0,id: 1,cim: 'Verseny autók', date: '2021.03.01', kSzam: 65},
            {kId: 0,id: 2,cim: 'Drift autók', date: '2021.03.01', kSzam: 76},
            {kId: 0,id: 3,cim: 'Terep autók', date: '2021.03.01', kSzam: 34},
            {kId: 1,id: 4,cim: 'Kezdő motorok', date: '2021.03.01', kSzam: 76},
            {kId: 1,id: 5,cim: 'Sport motorok', date: '2021.03.01', kSzam: 69},
            {kId: 1,id: 6,cim: 'Endúró motorok', date: '2021.03.01', kSzam: 123},
            {kId: 1,id: 7,cim: 'Gyorsasági motorok', date: '2021.03.01', kSzam: 549},
            {kId: 2,id: 8,cim: 'Suzuki swift motorcsere', date: '2021.03.01', kSzam: 34},
            {kId: 2,id: 9,cim: 'Suzuki Jimny motorcsere', date: '2021.03.01', kSzam: 67},
            {kId: 2,id: 10,cim: 'BMW difi csere', date: '2021.03.01', kSzam: 56},
        ],
        kommentek: [
            {uId: 0,valaszId: -1, tId: 0,id: 0,cim: 'Kurva jó kocsi', date: '2021.03.01',valaszSz: 'Válasz',valasz: false},
            {uId: 1,valaszId: -1, tId: 0,id: 1,cim: 'Nekem nem tetszik', date: '2021.03.01',valaszSz: 'Válasz',valasz: false},
            {uId: 0,valaszId: -1, tId: 0,id: 2,cim: 'Eskü gyári', date: '2021.03.01',valaszSz: 'Válasz',valasz: false},
            {uId: 1,valaszId: -1, tId: 0,id: 3,cim: 'Hiszi a piszi', date: '2021.03.01',valaszSz: 'Válasz',valasz: false},
            {uId: 2,valaszId: -1, tId: 1,id: 4,cim: 'Jók a felnik', date: '2021.03.01',valaszSz: 'Válasz',valasz: false},
            {uId: 3,valaszId: -1, tId: 1,id: 5,cim: 'köszi kurva drága volt', date: '2021.03.01',valaszSz: 'Válasz',valasz: false},
            {uId: 2,valaszId: -1, tId: 1,id: 6,cim: 'megérte', date: '2021.03.01',valaszSz: 'Válasz',valasz: false},
        ],

        //Legtöbbet hozzászólt topikok
        Ltopik: [
            {kId: 0,id: 0,cim: 'Autok', date: '2021.03.01',kSzam: 129},
            {kId: 0,id: 1,cim: 'BMW', date: '2021.03.01',kSzam: 65},
            {kId: 0,id: 2,cim: 'Szétrúgott BMW javítása', date: '2021.03.01',kSzam: 234},
            {kId: 0,id: 3,cim: 'Suzuki', date: '2021.03.01',kSzam: 100},
            {kId: 1,id: 4,cim: 'Motorok', date: '2021.03.01',kSzam: 78},
        ],

        //Mostani top témák
        Tkategoria: [
            {id: 0,cim: 'Autók', date: '2021.03.01',tSzam: 129},
            {id: 0,cim: 'Motorok', date: '2021.03.01',tSzam: 65},
            {id: 0,cim: 'Terepjárók', date: '2021.03.01',tSzam: 234},
            {id: 0,cim: 'Gokart', date: '2021.03.01',tSzam: 69},
            {id: 0,cim: 'Találkozók', date: '2021.03.01',tSzam: 78},
        ],

        //oldal kezelése
        Bkategoria : true,
        Btopikok: false,
        Bkommentek: false,
        fak: [],
        moderalas: false,
        Szmoderalas: 'Moderálás',
        katAdd: false,
        katSzoveg: 'Kategória hozzáadása',
        //Kategoria
        ujKat: '',
        //Topik
        ujTop: '',

        //Felhasználók kezelése
        belepve: false,
        komment: '',
    },
    mounted: function() {
        //console.log("Lekérem a kategóriákat a szerverről");
        //Lekérjük a kategóriákat a szterórol, majd a kategória object-be betoljuk :D

        /*
            fetch('http://example.com/songs')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
        */
       this.felhasznalolekeres();
    },
    methods: {
        felhasznalolekeres: function(x) {
            
            /*
            fetch('http://example.com/songs')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
            */

            this.felhasznalo = 'Szamjli01';
            this.beosztas = 'admin';

            if(this.felhasznalo == '')
            {
                this.belepve = false;
            }
            else
            {
                this.belepve = true;
            }
        },
        katValasztas: function(x) {
            console.log("Kategória Cím:" + this.kategoria[x].cim + ", ID: " + this.kategoria[x].id);

            //Oldal menedzselése => mi látszódjon és mi nem
            this.Btopikok = true;
            this.Bkategoria = false;

            //TREE 
            this.fak.push(this.kategoria[x].cim)


            //Lekérjük a szerverről a bizonyos id-val rendelkező topikokat, majd a topikok Object-be berakjuk :D
            //this.kategoria[x].id => az id (tulajdonképp az x)
            /*
            fetch('http://example.com/songs')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
            */
        },
        komValasztas: function(x) {
            console.log("Topik Cím:" + this.topikok[x].cim + ", ID: " + this.topikok[x].id);

            //Oldal menedzselése
            this.Bkommentek = true;
            this.Btopikok = false;

            this.fak.push(this.topikok[x].cim)

            this.kommentek.push(
                {uId: 4,valaszId: -1, tId: 2,id: 7,cim: 'Jók a tükrök', date: '2021.03.01',valaszSz: 'Válasz',valasz: false},
                {uId: 5,valaszId: -1, tId: 2,id: 8,cim: 'köszi, de gyári', date: '2021.03.01',valaszSz: 'Válasz',valasz: false},
                {uId: 4,valaszId: -1, tId: 2,id: 9,cim: 'de attól még jó', date: '2021.03.01',valaszSz: 'Válasz',valasz: false}
            )
            //Kommentek lekérése a szerverről, majd push a kommentek Objectbe
            /*
            fetch('http://example.com/songs')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
            */
        },
        oldalModeralas: function() {
            console.log('Az oldal átváltott moderátori üzemmódba!')
            this.moderalas = !this.moderalas;
            if(this.moderalas)
            {
                this.Szmoderalas = 'Mentés'
            }
            else
            {
                this.Szmoderalas = 'Moderálás'
            }
        },
        katHozzaadas: function() {
            this.kategoria.push({id: kI,cim: this.ujKat, date: '2021.03.01'});
            this.ujKat = '';
            kI++;
        },
        topikHozzaadasa: function() {
            //Megkeresem az adott kategorianak az id-t
            var szam = -1;
            for(let i = 0; i < Object.keys(this.kategoria).length; i++)
            {
                if(this.kategoria[i].cim === this.fak[0])
                {
                    szam = i;   
                }
            }

            this.topikok.push({kId: szam, id: tI, cim: this.ujTop, date: '2021.03.01', kSzam: Math.floor(Math.random() * 10)})
            this.ujTop = '';
        },
        katTorles: function(x) {
            this.kategoria.splice(x, 1);

            //Melyik kategóriát törölje ki az oldal a szerverről
            /*
            fetch('http://example.com/songs')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
            */
        },
        komTorles: function(x) {
            this.kommentek.splice(x, 1);

            //Melyik kommentet törölje ki az oldal a szerverről
            /*
            fetch('http://example.com/songs')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
            */
        },
        vissza: function() {
            if(this.Btopikok)
            {
                this.Bkategoria = true;
                this.Btopikok = false;
                this.Bkommentek = false;

                this.fak.pop();
            }

            if(this.Bkommentek)
            {
                this.Bkategoria = false;
                this.Btopikok = true;
                this.Bkommentek = false;
                
                this.fak.pop();
            }
        },
        kommentValasz: function(x) {
            this.kommentek[x].valasz = !this.kommentek[x].valasz;

            if(!this.valasz)
            {
                this.kommentek[x].valaszSz = 'Válasz';
            }

            if(this.kommentek[x].valasz)
            {
                this.kommentek[x].valaszSz = 'Mégse';
            }
        },
        kommentkuldes: function(x) {
            this.kommentek[x].valasz = false;
            console.log(this.kommentek[x].sztájl)

            this.kommentek.splice(x+1, 0, {uId: 0,valaszId: x, tId: 0,id: cI,cim: this.komment, date: '2021.03.01',valaszSz: 'Válasz',valasz: false, sztájl: 'margin-left: 15px'});
            this.komment = '';
            cI++;
        }
    }
})