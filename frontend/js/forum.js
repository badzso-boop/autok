let kI = 7;
let tI = 0;
let cI = 0;
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
            {kId: 0,id: 0,cim: 'Kezdő autók', date: '2021.03.01'},
            {kId: 0,id: 1,cim: 'Verseny autók', date: '2021.03.01'},
            {kId: 0,id: 2,cim: 'Drift autók', date: '2021.03.01'},
            {kId: 0,id: 3,cim: 'Terep autók', date: '2021.03.01'},
            {kId: 1,id: 4,cim: 'Kezdő motorok', date: '2021.03.01'},
            {kId: 1,id: 5,cim: 'Sport motorok', date: '2021.03.01'},
            {kId: 1,id: 6,cim: 'Endúró motorok', date: '2021.03.01'},
            {kId: 1,id: 7,cim: 'Gyorsasági motorok', date: '2021.03.01'},
            {kId: 2,id: 8,cim: 'Suzuki swift motorcsere', date: '2021.03.01'},
            {kId: 2,id: 9,cim: 'Suzuki Jimny motorcsere', date: '2021.03.01'},
            {kId: 2,id: 10,cim: 'BMW difi csere', date: '2021.03.01'},
        ],
        kommentek: [
            {uId: 0,tId: 0,id: 1,cim: 'Kurva jó kocsi', date: '2021.03.01'},
            {uId: 1,tId: 0,id: 2,cim: 'Nekem nem tetszik', date: '2021.03.01'},
            {uId: 0,tId: 0,id: 3,cim: 'Eskü gyári', date: '2021.03.01'},
            {uId: 1,tId: 0,id: 4,cim: 'Hiszi a piszi', date: '2021.03.01'},
            {uId: 2,tId: 1,id: 5,cim: 'Jók a felnik', date: '2021.03.01'},
            {uId: 3,tId: 1,id: 6,cim: 'köszi kurva drága volt', date: '2021.03.01'},
            {uId: 2,tId: 1,id: 7,cim: 'megérte', date: '2021.03.01'},
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
        ujKat: ''
    },
    mounted: function() {
        console.log("Lekérem a kategóriákat a szerverről");
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
        },
        katValasztas: function(x) {
            console.log("Cím:" + this.kategoria[x].cim + ", ID: " + this.kategoria[x].id);

            //Oldal menedzselése => mi látszódjon és mi nem
            this.Btopikok = true;
            this.Bkategoria = false;

            //TREE 
            this.fak.push(this.kategoria[x].cim)


            //Lekérjük a szerverről a bizonyos id-val rendelkező kommenteket, majd a topikok Object-be berakjuk :D
            //this.kategoria[x].id => az id (tulajdonképp az x)
            /*
            fetch('http://example.com/songs')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
            */
        },
        komValasztas: function(x) {
            console.log("Cím:" + this.topikok[x].cim + ", ID: " + this.topikok[x].id);

            //Oldal menedzselése
            this.Bkommentek = true;
            this.Btopikok = false;

            this.fak.push(this.topikok[x].cim)

            this.kommentek.push(
                {uId: 4,tId: 2,id: 5,cim: 'Jók a tükrök', date: '2021.03.01'},
                {uId: 5,tId: 2,id: 6,cim: 'köszi, de gyári', date: '2021.03.01'},
                {uId: 4,tId: 2,id: 7,cim: 'de attól még jó', date: '2021.03.01'}
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
            this.katAdd = !this.katAdd;
            if(this.katAdd)
            {
                this.katSzoveg = 'Mentés'
            }
            else
            {
                this.katSzoveg = 'Kategória hozzáadása'
            }
            
            if(!this.katAdd)
            {
                this.kategoria.push({id: kI,cim: this.ujKat, date: '2021.03.01'});
                this.ujKat = '';
                kI++;
            }
        }
    }
})