<template>
<div>
  <div id="main" class="row min-vh-100 w-100 m-0 break-word">
      <div id="forum-menu" class="col-xl-2 mx-auto border-right border-dark">
        <div class="mb-3 m-0 p-1 text-center">
          <h5>Legtöbbet hozzászólt</h5>
          <hr>
          <a v-for="(topik, index) in Ltopik" :key="index" class="d-block forum-menu-top nav-link" href="#">{{topik.cim}} - <span><kbd class="p-1">{{topik.kSzam}}</kbd></span></a>
          <!--
          <a class="d-block forum-menu-top nav-link" href="#">Autok - <span><kbd class="p-1">129</kbd></span></a>
          <a class="d-block forum-menu-top nav-link" href="#">BMW - <span><kbd class="p-1">65</kbd></span></a>
          <a class="d-block forum-menu-top nav-link" href="#">Opel - <span><kbd class="p-1">234</kbd></span></a>
          <a class="d-block forum-menu-top nav-link" href="#">Suzuki - <span><kbd class="p-1">10</kbd></span></a>
          <a class="d-block forum-menu-top nav-link" href="#">Mercedes - <span><kbd class="p-1">78</kbd></span></a>
          -->
        </div>
        <div class="mb-3 m-0 p-1 text-center">
          <h5>Mostani top témák</h5>
          <hr>
          <a v-for="(top, index) in Tkategoria" :key="index" class="d-block forum-menu-top nav-link" href="#">{{top.cim}} - <span><kbd class="p-1">{{top.tSzam}}</kbd></span></a>
            <!--
            <a class="d-block forum-menu-top nav-link" href="#">Autok - <span><kbd class="p-1">129</kbd></span></a>
            <a class="d-block forum-menu-top nav-link" href="#">BMW - <span><kbd class="p-1">65</kbd></span></a>
            <a class="d-block forum-menu-top nav-link" href="#">Opel - <span><kbd class="p-1">234</kbd></span></a>
            <a class="d-block forum-menu-top nav-link" href="#">Suzuki - <span><kbd class="p-1">10</kbd></span></a>
            <a class="d-block forum-menu-top nav-link" href="#">Mercedes - <span><kbd class="p-1">78</kbd></span></a>
            -->
        </div>
      </div>
      <div class="col-xl mx-auto">
        <div class="p-3 m-0  border-top border-bottom border-dark">
          <button class="btn btn-dark my-2 ml-0 mr-2" v-on:click="vissza"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
          <select class="d-inline form-control w-50">
            <option selected="">Latest</option>
            <option value="1">Popular</option>
            <option value="2">Solved</option>
            <option value="3">Unsolved</option>
            <option value="4">No Replies Yet</option>
          </select>
          <div id="menu" class="d-inline" v-if="beosztas === 'admin'">
            <button class="btn btn-dark mb-2 pull-right my-auto" v-on:click="oldalModeralas()">{{Szmoderalas}}</button>
          </div>
          <div class="d-block">
            <button class="d-inline my-2 btn btn-dark" v-if="moderalas" v-on:click="katHozzaadas()">{{katSzoveg}}</button>
            <input class="d-inline form-control w-50" placeholder="Új kategória neve" type="text" v-if="katAdd || moderalas" v-model="ujKat">
          </div>
        </div>

        <!--FA-->
        <div class="ml-3 mt-3">
          <span v-for="(fa,index) in fak" :key="index"> > {{fa.cim}}</span>
        </div>

        <!--Kategóriák-->
        <div class="wrapper" v-if="Bkategoria">
          <div class="mt-2 row" v-for="(d, index) in kategoria" :key="index">
              <div class="col-xl d-inline">
              <!--Kategóriák - Cím-->
                <div class="card-deck">
                  <div class="card">
                    <button class="btn btn-dark" v-on:click="katValasztas(index)">
                      <div class="card-body">
                        <p class="card-title">{{d.cim}}</p>
                        <p class="card-subtitle">Dátum: {{d.date}}</p>
                      </div>
                    </button>
                  </div>
              <!--Kategória törlése gomb-->
                <button v-if="moderalas" v-on:click="katTorles(index)">Kategória törlése</button>
              </div>
            </div>
          </div>
        </div>

      <!--Topikok-->
      <!--Azért raktam ezeket egy nagy div-be mert lusta voltam css-t csinálni és így van térköz és egy elválasztó is. Majd csak a v-if-re figyelj a többit törölheted ahogy szeretnéd-->
      <!--Topik hozzáadása-->
      <button v-if="moderalas && Btopikok">Topik hozzáadása</button>
      <div class="wrapper" v-if="Btopikok">
        <div class="mt-2 row" v-for="(t, index) in topikok" :key="index">
          <div class="col-xl d-inline">
            <div class="card-deck">
              <div class="card">
                <button class="btn btn-dark" v-on:click="komValasztas(index)">
                  <div class="card-body">
                    <!--Topik cím-->
                    <div class="card-title">{{t.cim}}</div>
                    <!--Topik dátum-->
                    <div class="card-subtitle">Dátum: {{t.date}}</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Kommentek-->
      <!--Azért raktam ezeket egy nagy div-be mert lusta voltam css-t csinálni és így van térköz és egy elválasztó is. Majd csak a v-if-re figyelj a többit törölheted ahogy szeretnéd-->
      <div class="wrapper" v-if="Bkommentek">
        <div class="mt-2 row" v-for="(k,index) in kommentek" :key="index">
          <!--<div v-if="k.valaszId != -1" style="display: inline-block; height: 250px; width: 75px;">Hali</div>-->
          <div class="col-xl d-inline py-2 border border-warning">
            <p>{{k.valaszId}} --- {{k.id}}</p>
            <div>
              <!--Komment picture-->
              <img class="img-thumbnail rounded d-inline m-2" v-bind:src="'kepek/f' + k.uId + '.jpg'" alt="profilkép">
              <!--maga a komment-->
              <p class="">komment: {{k.cim}}</p><h4>Dátum: {{k.date}}</h4>
            </div>

            <!--Komment válasz-->
            <button v-on:click="kommentValasz(index)">{{k.valaszSz}}</button>
            <textarea v-show="k.valasz" name="" id="" cols="30" rows="10" v-model="komment"></textarea>
            <button v-show="k.valasz" v-on:click="kommentkuldes(index)">Küldés</button>

            <!--Komment törlése-->  
            <button v-if="moderalas" v-on:click="komTorles(index)">Komment törlése</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--Kommentek-->
  <!--Azért raktam ezeket egy nagy div-be mert lusta voltam css-t csinálni és így van térköz és egy elválasztó is. Majd csak a v-if-re figyelj a többit törölheted ahogy szeretnéd-->
    <div v-if="Bkommentek">
      <div class="mt-2 row" v-for="(k, index) in kommentek" :key="index">
        <!--<div v-if="k.valaszId != -1" style="display: inline-block; height: 250px; width: 75px;">Hali</div>-->
        <div class="col-xl d-inline py-2 border border-warning">
          <p>{{k.valaszId}} --- {{k.id}}</p>
          <div>
            <!--Komment picture-->
            <img class="img-thumbnail rounded d-inline m-2" v-bind:src="'kepek/f' + k.uId + '.jpg'" alt="profilkép">
            <!--maga a komment-->
            <p class="">komment: {{k.cim}}</p><h4>Dátum: {{k.date}}</h4>
          </div>

          <!--Komment válasz-->
        <button v-on:click="kommentValasz(index)">{{k.valaszSz}}</button>
        <textarea v-show="k.valasz" name="" id="" cols="30" rows="10" v-model="komment"></textarea>
        <button v-show="k.valasz" v-on:click="kommentkuldes(index)">Küldés</button>

        <!--Komment törlése-->
        <button v-if="moderalas" v-on:click="komTorles(index)">Komment törlése</button>
      </div>
    </div>
  </div>
</div>
</template>



<script>
  //Kategoria ID
  let kI = 7;
  //Topik ID
  let tI = 0;
  //Komment ID
  let cI = 10;
export default {
  name: 'Forum',
  data() {
    return {
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
      fa_id: 0,
    }
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
    felhasznalolekeres: function() {
      
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
      this.fak.push({cim: this.kategoria[x].cim, id: this.fa_id});
      this.fa_id++;


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

      this.fak.push({cim: this.topikok[x].cim, id: this.fa_id});
      this.fa_id++;

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
        this.fa_id--;
      }

      if(this.Bkommentek)
      {
        this.Bkategoria = false;
        this.Btopikok = true;
        this.Bkommentek = false;
        
        this.fak.pop();
        this.fa_id--;
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
}
</script>

<style>

</style>