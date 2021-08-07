var app = new Vue({
    el: '#main',
    data: {
        //Utak
        utak: [],
        seged: [],
        page:1,
        pageStart: 0,
        pageEnd: 10,
        //keresés
        megye: "",
        tipus: "",
        minoseg: "",
        hossz: 0,
    },mounted: function() {
        this.getUtak()
    },
    methods: {
        getUtak: function() {
            /*
            Elküldöm a szervernek az oldalszámot(default:0),
            Ő meg visszaküldi az első 50 utat
            VAAAGY
            Lekérem az összeset aztán én sortolom ki 50-vel -> Eloszor ezt
            */
            console.log("oldal: "+this.page)
            console.log("listazaskezdo: "+this.pageStart)
            console.log("listazasvege: "+this.pageEnd)
            for(let i = this.pageStart; i< this.pageEnd; i++)
            {
                this.utak.push({id: 0,
                    userid: 0,
                    picture: 'sample',
                    title: `Rátót${i}`,
                    content: 'Rohadt jó út rátót fele. Ez egy jó út!',
                    length: 15,
                    megye: 'Veszprém',
                    type: 'szerpentín',
                    quality: 'kiválló',
                    nezetseg: 15,
                    date: '2021.04.29 18:30'})
            }
        },
        elore: function() {
            console.log('előre')
            //lenullazom az eddigit ami kint van
            this.utak = []
            //léptetem előre a kiiras kezdetet es veget
            this.pageStart+=10;
            this.pageEnd+=10;
            //leptetem az oldalt
            this.page+=1;
            //ujra meghivom a lekerest
            this.getUtak()
        },
        vissza: function() {
            console.log('vissza')
            //lenullazom az eddigit ami kint van
            this.utak = []
            //leellenorzom hogy az elso oldalon van-e
            if(this.pageStart==0)
            {
                console.log('Az első oldalon vagy!')
            }else {
                this.pageStart-=10;
                this.pageEnd-=10;
                this.page-=1;
            }
            //ujra meghivoma lekerest
            this.getUtak()
        },
        kereses: function(event) {
            event.preventDefault();
            console.log("megye: " + this.megye + " \t típus: " + this.tipus + "\t minoseg: " + this.minoseg + "\t hossz: " + this.hossz);
        },
    } 
})