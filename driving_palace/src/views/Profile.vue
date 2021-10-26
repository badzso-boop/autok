<template>
<div id="main" class="container-fluid w-100 break-word">
  <h2 class="text-center piros">{{cim}}</h2>
  <div class="row">
    <div id="left" class="col-xl-3">
    <h3 class="mb-3">Menü</h3>
    <div class="btn-group" role="group"><button v-bind:id="adatok" v-on:click="Madatok" class="btn w-75 mb-3 text-left pl-4"><i class="fa fa-address-card pr-2" aria-hidden="true"></i>Adatok</button></div>
    <div class="btn-group" role="group"><button v-bind:id="utjaim" v-on:click="Mutjaim" class="btn w-75 mb-3 text-left pl-4"><i class="fa fa-road pr-2" aria-hidden="true"></i>Útjaim</button></div>
    <div class="btn-group" role="group"><button v-bind:id="helyszineim" v-on:click="Mhelyszinek" class="btn w-75 mb-3 text-left pl-4"><i class="fa fa-map-marker pr-2" aria-hidden="true"></i>Helyszíneim</button></div>
    <!--
    <div class="btn-group" role="group"><button v-bind:id="rendezveny" class="btn w-75 mb-3 text-left pl-4"><i class="fa fa-calendar-check-o pr-2" aria-hidden="true"></i>Rendezvényeim</button></div>
    <div class="btn-group" role="group"><button v-bind:id="galeria" class="btn w-75 mb-3 text-left pl-4"><i class="fa fa-camera-retro pr-2" aria-hidden="true"></i>Galériám</button></div>
    -->
    </div>
    <div id="right" class="col-xl-9">
    <!--Adatok-->
    <div id="elso" class="container-fluid w-100 mt-5" v-if="adatok">
      <!--<h3>{{alcim}}</h3>-->
      <div class="row">
      <div class="col-xl-8 text-center">
        <img v-bind:src="'assets/' + pPicture + '.jpg'" alt="Profilkép" style="max-width: 15rem;" class="border border-dark m-3">
      </div>
      <div class="col-xl-8 text-center">
        <h3 v-if="szerk" class="text-center my-3">{{fullname}}</h3>
        <input type="text" class="form-control w-75 text-center my-3 mx-auto" v-model="fullname" v-else>

        <p class="m-0 mt-2 p-0 text-center"><span  class="badge badge-dark p-1">@{{felhasznalo}}</span></p>

        <p v-if="szerk" class="text-center m-0 mt-2"><i class="fa fa-envelope" aria-hidden="true"></i> {{email}}</p>
        <input type="email" class="form-control w-75 mx-auto text-center m-0 mt-2" v-model="email" v-bind:disabled="szerk" v-else>

        <p v-if="szerk" class="text-center mt-2 w-75 mx-auto font-weight-bold">{{leiras}}</p>
        <textarea name="" class="form-control text-center mt-2 w-75 mx-auto font-weight-bold" v-model="leiras" id="" cols="30" rows="10" v-bind:disabled="szerk" v-else></textarea>

        <ul class="list-group list-group-flush w-75 mx-auto text-center" v-if="szerk">
        <h4 class="piros mt-4 font-weight-bold">Csoportjaim</h4>
        <li v-for="group in groups" class="list-group-item" :key="group.id">
          {{group.name}}
        </li>
        </ul>
        <button class="btn btn-dark my-3 mx-auto" v-else>Jelentkezés csoportokba</button>
      </div>
      </div>

      <div class="row my-2">
      <div class="col-xl-4 mx-auto">
        <!--<img v-bind:src="'assets/' + cPicture + '.jpg'" alt="Jármű kép" style="width: 250px;">-->
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
        <div class="carousel-item active">
          <img v-bind:src="'assets/' + cPicture + '.jpg'" alt="Jármű kép" class="d-block w-100">
        </div>
        <div class="carousel-item">
          <img v-bind:src="'assets/' + cPicture + '.jpg'" alt="Jármű kép" class="d-block w-100">
        </div>
        <div class="carousel-item">
          <img v-bind:src="'assets/' + cPicture + '.jpg'" alt="Jármű kép" class="d-block w-100">
        </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
        </a>
        </div>
      </div>
      <div class="col-xl-4"></div>
      </div>

      <div class="row">
      <div class="col-xl-8 text-center">
        <button v-on:click="szerkMent" class="btn btn-dark m-3"><i class="fa fa-pencil" aria-hidden="true"></i> {{gomb}}</button>
      </div>
      </div>
    </div>

    <!--Utak-->
    <div id="masodik" v-if="utjaim">
      <!--<h2>{{alcim}}</h2>-->
      <div v-if="utjaim" class="card-deck mx-auto my-5">
      <div class="card sotetarny mx-auto mb-3 border border-white p-2" style="max-width: 22rem; min-width: 17rem;" v-for = "ut in utak" :key="ut.id">
        <img class="card-img-top mh-25 p-2" v-bind:src="'/assets/' + ut.picture + '.jpg'" alt="Kép a megadott útról">
        <div class="card-body">
        <h5 class="card-title text-white">{{ut.title}}</h5>
        <p class="card-text text-white">{{ut.content}}</p>
        </div>
        <ul class="list-group list-group-flush" v-show="!ut.edit">
        <li class="list-group-item sotetarny text-white">{{ut.megye}}</li>
        <li class="list-group-item sotetarny text-white">Hossz: {{ut.length}}</li>
        <li class="list-group-item sotetarny text-white">Típus: {{ut.type}}</li>
        <li class="list-group-item sotetarny text-white">Minőség: {{ut.quality}}</li>
        </ul>
        <div v-show="ut.edit">
        <!--Megye-->
        <label for="megye" class="text-light">Megye</label>
        <select name="megyek" class="form-group d-block w-100 form-control" id="megye" v-model="ut.megye">
          <option value="" disabled selected hidden>Kérem Válasszon</option>
          <option value="Bács-Kiskun">Bács-Kiskun</option>
          <option value="Baranya">Baranya</option>
          <option value="Békés">Békés</option>
          <option value="Borsod-Abaúj-Zemplén">Borsod-Abaúj-Zemplén</option>
          <option value="Csongrád-Csanád">Csongrád-Csanád</option>
          <option value="Fejér">Fejér</option>
          <option value="Győr-Moson-Sopron">Győr-Moson-Sopron</option>
          <option value="Hajdú-Buhar">Hajdú-Bihar</option>
          <option value="Heves">Heves</option>
          <option value="Jász-Nagykun-Szolnok">Jász-Nagykun-Szolnok</option>
          <option value="Komárom-Esztergom">Komárom-Esztergom</option>
          <option value="Nógrád">Nógrád</option>
          <option value="Pest">Pest</option>
          <option value="Somogy">Somogy</option>
          <option value="Szabolcs-Szatmár-Bereg">Szabolcs-Szatmár-Bereg</option>
          <option value="Tolna">Tolna</option>
          <option value="Vas">Vas</option>
          <option value="Veszprém">Veszprém</option>
          <option value="Zala">Zala</option>
        </select>
        <!--Hossz-->
        <label for="hossz" class="text-light">Út hossza</label>
        <input type="number" class="form-group d-block w-100 form-control" id="hossz" v-model="ut.length">
        <!--Típus-->
        <label for="tipus" class="text-light">Út típusa</label>
        <select name="tipus" class="form-group d-block w-100 form-control" id="tipus" v-model="ut.type">
          <option value="" disabled selected hidden>Kérem Válasszon</option>
          <option value="Szerpentín">Szerpentín</option>
          <option value="Egyenes">Egyenes</option>
        </select>
        <!--Minőség-->
        <label for="minoseg" class="text-light">Út minősége</label>
        <select name="minoseg" class="form-group d-block w-100 form-control" id="minoseg" v-model="ut.quality">
          <option value="" disabled selected hidden>Kérem Válasszon</option>
          <option value="Rossz">Rossz</option>
          <option value="Közepes">Közepes</option>
          <option value="Jó">Jó</option>
        </select>
        </div>
        <div class="card-body mx-auto">
        <button class="btn card-link piros py-1 px-3" v-on:click="szerkMent(index)">{{ut.gomb}}</button>
        <button class="btn card-link piros py-1 px-3">Another link</button>
        </div>
      </div>
      </div>
    </div>

    <!--Helyszínek-->
    <div id="harmadik" v-if="helyszineim">
      <!--<h2>{{alcim}}</h2>-->
      <div v-if="helyszineim" class="card-deck mx-auto my-5">
      <div class="card sotetarny mx-auto mb-3 border border-white p-2" style="max-width: 22rem; min-width: 17rem;" v-for = "hely in helyek" :key="hely.id">
        <img class="card-img-top mh-25 p-2" v-bind:src="'assets/' + hely.picture + '.jpg'" alt="Kép a megadott útról">
        <div class="card-body">
        <h5 class="card-title text-white">{{hely.title}}</h5>
        <p class="card-text text-white">{{hely.content}}</p>
        </div>
        <ul v-show="!hely.edit" class="list-group list-group-flush">
        <li class="list-group-item sotetarny text-white">{{hely.megye}}</li>
        <li class="list-group-item sotetarny text-white">Megközelíthetőség: {{hely.kozelithetoseg}}</li>
        <li class="list-group-item sotetarny text-white">Férőhely: {{hely.hely}}</li>
        </ul>
        <div v-show="hely.edit">
        <!--Megye-->
        <label for="megye" class="text-light">Megye</label>
        <select name="megyek" class="form-group d-block w-100 form-control" id="megye" v-model="hely.megye">
          <option value="" disabled selected hidden>Kérem Válasszon</option>
          <option value="Bács-Kiskun">Bács-Kiskun</option>
          <option value="Baranya">Baranya</option>
          <option value="Békés">Békés</option>
          <option value="Borsod-Abaúj-Zemplén">Borsod-Abaúj-Zemplén</option>
          <option value="Csongrád-Csanád">Csongrád-Csanád</option>
          <option value="Fejér">Fejér</option>
          <option value="Győr-Moson-Sopron">Győr-Moson-Sopron</option>
          <option value="Hajdú-Buhar">Hajdú-Bihar</option>
          <option value="Heves">Heves</option>
          <option value="Jász-Nagykun-Szolnok">Jász-Nagykun-Szolnok</option>
          <option value="Komárom-Esztergom">Komárom-Esztergom</option>
          <option value="Nógrád">Nógrád</option>
          <option value="Pest">Pest</option>
          <option value="Somogy">Somogy</option>
          <option value="Szabolcs-Szatmár-Bereg">Szabolcs-Szatmár-Bereg</option>
          <option value="Tolna">Tolna</option>
          <option value="Vas">Vas</option>
          <option value="Veszprém">Veszprém</option>
          <option value="Zala">Zala</option>
        </select>

        <!--Megközelíthetőség-->
        <label for="tipus" class="text-light">Megközelíthetőség</label>
        <select name="tipus" class="form-group d-block w-100 form-control" id="tipus" v-model="hely.kozelithetoseg">
          <option value="" disabled selected hidden>Kérem Válasszon</option>
          <option value="Könnyű">Könnyen</option>
          <option value="Közepes">Nehézkes</option>
          <option value="Nehéz">Nehéz</option>
        </select>

        <!--Férőhely-->
        <label for="hossz" class="text-light">Férőhely</label>
        <input type="number" class="form-group d-block w-100 form-control" id="hossz" v-model="hely.hely">
        </div>
        <div class="card-body mx-auto">
        <button class="btn card-link piros py-1 px-3" v-on:click="szerkMent(index)">{{hely.gomb}}</button>
        <button class="btn card-link piros py-1 px-3">Another link</button>
        </div>
      </div>
      </div>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
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
          ],
      helyek: [
            {id: 0,userid: 0,picture: 'sample',title: 'Szabadja Halott város',content: 'Olyan mintha visszamennénk a 80-s évekbe egyszerűen imádom!',megye: 'Veszprém',kozelithetoseg: 'könnyen',nezetseg: 15,hely: 50,date: '2021.04.29 18:30', edit: false, gomb: 'Szerkesztés'},
            {id: 1,userid: 0,picture: 'sample',title: 'Szabadja Halott város',content: 'Olyan mintha visszamennénk a 80-s évekbe egyszerűen imádom!',megye: 'Veszprém',kozelithetoseg: 'könnyen',nezetseg: 15,hely: 50,date: '2021.04.29 18:30', edit: false, gomb: 'Szerkesztés'},
            {id: 2,userid: 0,picture: 'sample',title: 'Szabadja Halott város',content: 'Olyan mintha visszamennénk a 80-s évekbe egyszerűen imádom!',megye: 'Veszprém',kozelithetoseg: 'könnyen',nezetseg: 15,hely: 50,date: '2021.04.29 18:30', edit: false, gomb: 'Szerkesztés'},
          ],
    }

  },
  mounted: function() {
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
}
</script>

<style>

</style>