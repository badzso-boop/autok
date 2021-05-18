var app = new Vue({
    el: '#main',
    data: {
        kategoria: [
            {id: 0,cim: 'Autók'},
            {id: 1,cim: 'Motorok'},
            {id: 2,cim: 'Szerelés'},
            {id: 3,cim: 'Cruising'},
            {id: 4,cim: 'Találkozók'},
            {id: 5,cim: 'Egyéb'}
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
        ]
    },
    methods: {
        katValasztas: function(x) {
            console.log(x)
            return ``
        }
    }
})