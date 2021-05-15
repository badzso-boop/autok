var app = new Vue({
    el: '#proba',
    data: {
        uzenet: 'SZoszi MO',
        mUtak: [],
        mHely: [],
        szam: []
    },
    mounted: function() {
        //this.getData();
        this.plusz();
    },
    methods: {
        getData: function() {
            //utak 3db fetch (prototipus fetch), 
            //minden fetch elemnél pusholni kell a tömbbe
            for(let i = 0; i < 0; i++)
            {
                console.log('baj ut')
                this.mUtak.push({id: 0,
                    userid: 0,
                    picture: 'sample',
                    title: 'Rátót',
                    content: 'Rohadt jó út rátót fele. Ez egy jó út!',
                    length: 15,
                    megye: 'Veszprém',
                    type: 'szerpentín',
                    quality: 'kiválló',
                    nezetseg: 15,
                    date: '2021.04.29 18:30'})
            }
            // A lényegi rész ez a fetch lesz
            /*
            fetch('http://example.com/songs')
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(err => console.error(err));
            */

            //helyszínek 3db fetch (prototipus fetch), 
            //minden fetch elemnél pusholni kell a tömbbe
            for(let i = 0; i < 0; i++)
            {
                console.log('baj hely');
                this.mHely.push({id: 0,
                    userid: 0,
                    picture: 'sample',
                    title: 'Szabadja Halott város',
                    content: 'Olyan mintha visszamennénk a 80-s évekbe egyszerűen imádom!',
                    megye: 'Veszprém',
                    kozelithetoseg: 'könnyen',
                    nezetseg: 15,
                    date: '2021.04.29 18:30'})
            }
            // A lényegi rész ez a fetch lesz
            /*
            fetch('http://example.com/songs')
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(err => console.error(err));
            */
        },
        plusz: function() {
            console.log('szia ur')
            for(let i = 0; i < 4; i++)
            {
                this.szam.push({kacsa: 'kacsa'})
            }
        }
    }
})