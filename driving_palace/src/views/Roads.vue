<template>
  <div id="main" class="container-fluid w-100">
    <h2 class="text-center piros">Utak</h2>
    <div class="row">
      <form id="search" class="col-xl-2">
        <h3 class="mb-3">Szűrő</h3>
        <label for="megye">Megye</label>
        <select name="megyek" class="form-group d-block w-100 form-control" id="megye" v-model="megye">
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

        <label for="tipus">Út típusa</label>
        <select name="tipus" class="form-group d-block w-100 form-control" id="tipus" v-model="tipus">
          <option value="" disabled selected hidden>Kérem Válasszon</option>
          <option value="Szerpentín">Szerpentín</option>
          <option value="Egyenes">Egyenes</option>
        </select>

        <label for="minoseg">Út minősége</label>
        <select name="minoseg" class="form-group d-block w-100 form-control" id="minoseg" v-model="minoseg">
          <option value="" disabled selected hidden>Kérem Válasszon</option>
          <option value="Szar">Rossz</option>
          <option value="Közepes">Közepes</option>
          <option value="Jó">Jó</option>
        </select>
          
        <label for="hossz">Út hossza</label>
        <input type="number" class="form-group d-block w-100 form-control" id="hossz" v-model="hossz">
        <button class="btn sotetarny text-white w-100 mb-3" v-on:click="kereses">Keresés</button>
        <hr>
        <router-link class="card-link btn sotetarny text-white w-100 mb-5 mt-3" to="/utfeltoltes"><span><i class="fa fa-plus" aria-hidden="true"></i></span> Út feltöltése</router-link>
      </form>

      <!-- TODO: Ha lesz időnk, akkor komponensbe helyezzük a kártyát -->
      <div class="col-xl">
        <div class="card-deck mx-auto my-5">
          <div class="card sotetarny mx-auto mb-3 border border-white" style="max-width: 22rem; min-width: 17rem;" v-for = "ut in utak" :key="ut.id">
            <!--<img class="card-img-top mh-25 p-2" v-bind:src="'kepek/' + ut.picture + '.jpg'" alt="Kép a megadott útról">-->
            <img class="card-img-top mh-25 p-2" src="../kepek/sample.jpg" alt="Kép a megadott útról">
            <div class="card-body">
              <h5 class="card-title text-white">{{ut.title}}</h5>
              <p class="card-text text-white">{{ut.content}}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item sotetarny text-white">{{ut.megye}}</li>
              <li class="list-group-item sotetarny text-white">Hossz: {{ut.length}}</li>
              <li class="list-group-item sotetarny text-white">Típus: {{ut.type}}</li>
              <li class="list-group-item sotetarny text-white">Minőség: {{ut.quality}}</li>
            </ul>
            <div class="card-body mx-auto">
              <a href="#" class="card-link piros py-1 px-3">Card link</a>
              <a href="#" class="card-link piros py-1 px-3">Another link</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 text-center mb-5">
        <button class="btn d-inline pb-2" id="navigation" v-on:click="vissza"><i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i></button>
        <span class="d-inline" id="navigation">{{page}}</span>
        <button class="btn d-inline pb-2" id="navigation" v-on:click="elore"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Roads',
  data() {
    return {
      //Utak
      utak: [],
      page:1,
      pageStart: 0,
      //keresés
      megye: "",
      tipus: "",
      minoseg: "",
      hossz: 0,
    }
  },
  mounted() {
    this.getUtak()
  },
  methods: {
    getUtak: function() {
      //Elküldöm a szervernek a pageSTart és a pageEnd változókat,
      console.log("oldal: "+this.page)
      console.log("listazaskezdo: "+this.pageStart)
    
      //Elküldöm a this.pagestart és a this.padeEnd változót és akkor megkapom az adatokat responseban pl: első 10db utat

      //feltöltöm a response adatokat az utak változóba így kerül ki az oldalra

      fetch(`http://localhost:8000/roads/get/${this.pageStart}`)
          .then(response => response.json())
          .then(data => {
              this.utak = data.data;
          });
    },
    elore: function() {
      console.log('előre')
      //lenullazom az eddigit ami kint van
      this.utak = []
      //léptetem előre a kiiras kezdetet es veget
      this.pageStart+=10;
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
      //Elküldöm az adatokat a szervernek és ő erre szűkíti rá a keresést
      this.pageStart = 0;
      fetch(`http://localhost:8000/roads/filter`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({county: this.megye, type: this.tipus, quality: this.minoseg, length: this.hossz, offset: this.pageStart})
        }).then(response => response.json()).then(data => {this.utak = data.data;});
    },
  },
}
</script>

<style>

</style>
