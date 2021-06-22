var app = new Vue({
    el: '#main',
    data: {
        kategoria: [
            {id: 0,cim: 'Autók'},
            {id: 1,cim: 'Motorok'},
            {id: 2,cim: 'Szerelés'},
            {id: 3,cim: 'Cruising'},
            {id: 4,cim: 'Találkozók'},
            {id: 5,cim: 'Társalgás'},
            {id: 6,cim: 'Egyéb'},
        ],
        topikok: [
            {kId: 0,id: 0,cim: 'Kezdő autók'},
            {kId: 0,id: 1,cim: 'Verseny autók'},
            {kId: 0,id: 2,cim: 'Drift autók'},
            {kId: 0,id: 3,cim: 'Terep autók'},
            {kId: 1,id: 4,cim: 'Kezdő motorok'},
            {kId: 1,id: 5,cim: 'Sport motorok'},
            {kId: 1,id: 6,cim: 'Endúró motorok'},
            {kId: 1,id: 7,cim: 'Gyorsasági motorok'},
            {kId: 2,id: 8,cim: 'Suzuki swift motorcsere'},
            {kId: 2,id: 9,cim: 'Suzuki Jimny motorcsere'},
            {kId: 2,id: 10,cim: 'BMW difi csere'},
        ],
        kommentek: [
            {uId: 0,tId: 0,id: 1,cim: 'Kurva jó kocsi'},
            {uId: 1,tId: 0,id: 2,cim: 'Nekem nem tetszik'},
            {uId: 0,tId: 0,id: 3,cim: 'Eskü gyári'},
            {uId: 1,tId: 0,id: 4,cim: 'Hiszi a piszi'},
            {uId: 2,tId: 1,id: 5,cim: 'Jók a felnik'},
            {uId: 3,tId: 1,id: 6,cim: 'köszi kurva drága volt'},
            {uId: 2,tId: 1,id: 7,cim: 'megérte'},
        ],
        Btopikok: false,
        Bkommentek: false,
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
    },
    methods: {
        katValasztas: function(x) {
            console.log("Cím:" + this.kategoria[x].cim + ", ID: " + this.kategoria[x].id);
            this.Btopikok = true;
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
            this.Bkommentek = true;
            this.kommentek.push(
                {uId: 4,tId: 2,id: 5,cim: 'Jók a tükrök'},
                {uId: 5,tId: 2,id: 6,cim: 'köszi, de gyári'},
                {uId: 4,tId: 2,id: 7,cim: 'de attól még jó'}
            )
            //Kommentek lekérése a szerverről, majd push a kommentek Objectbe
            /*
            fetch('http://example.com/songs')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
            */
        }
    }
})