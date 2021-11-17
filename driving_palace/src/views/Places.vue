<template>
  <div id="main" class="container-fluid w-100">
  <h2 class="text-center piros">Helyszínek</h2>
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

    <label for="tipus">Megközelíthetőség</label>
    <select name="tipus" class="form-group d-block w-100 form-control" id="tipus" v-model="tipus">
      <option value="" disabled selected hidden>Kérem Válasszon</option>
      <option value="Könnyű">Könnyen</option>
      <option value="Közepes">Nehézkes</option>
      <option value="Nehéz">Nehéz</option>
    </select>

    <label for="hossz">Férőhely</label>
    <input type="number" class="form-group d-block w-100 form-control" id="hossz" v-model="Fhely">
    <button class="btn sotetarny text-white w-100 mb-3" v-on:click="kereses">Keresés</button>
    <hr>
    <router-link class="card-link btn sotetarny text-white w-100 mb-5 mt-3" to="/helyfeltoltes"><span><i class="fa fa-plus" aria-hidden="true"></i></span> Helyszín feltöltése</router-link>
    </form>


    <div class="col-xl">
    <div class="card-deck mx-auto my-5">
      <div class="card sotetarny mx-auto mb-3 border border-white" style="max-width: 22rem; min-width: 17rem;" v-for = "hely in helyek" :key="hely.id">
      <img class="card-img-top mh-25 p-2" v-bind:src="'kepek/' + hely.picture + '.jpg'" alt="Kép a megadott útról">
      <div class="card-body">
        <h5 class="card-title text-white">{{hely.title}}</h5>
        <p class="card-text text-white">{{hely.content}}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item sotetarny text-white">{{hely.megye}}</li>
        <li class="list-group-item sotetarny text-white">Megközelíthetőség: {{hely.kozelithetoseg}}</li>
        <li class="list-group-item sotetarny text-white">Férőhely: {{hely.hely}}</li>
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
  name: 'Places',
  data() {
    return {
      //Helyek
      helyek: [],
      //Oldal
      page:1,
      pageStart: 0,
      //keresés
      megye: "",
      tipus: "",
      Fhely: 0,
    }
  },
  mounted: function() {
    this.getHelyek()
  },
  methods: {
    getHelyek: function() {
      console.log("oldal: "+this.page)
      console.log("listazaskezdo: "+this.pageStart)

      fetch(`http://localhost:8000/places/get/${this.pageStart}`)
        .then(response => response.json())
        .then(data => {
            this.helyek = data.data;
        });
    },
    elore: function() {
      console.log('előre')
      //lenullazom az eddigit ami kint van
      this.helyek = []
      //léptetem előre a kiiras kezdetet es veget
      this.pageStart+=10;
      //leptetem az oldalt
      this.page+=1;
      //ujra meghivom a lekerest
      this.getHelyek()
    },
    vissza: function() {
      console.log('vissza')
      //lenullazom az eddigit ami kint van
      this.helyek = []
      //leellenorzom hogy az elso oldalon van-e
      if(this.pageStart==0)
      {
        console.log('Az első oldalon vagy!')
      }else {
        this.pageStart-=10;
        this.page-=1;
      }
      //ujra meghivoma lekerest
      this.getHelyek()
    },
    kereses: function(event) {
      event.preventDefault();
      console.log("megye: " + this.megye + " \t típus: " + this.tipus + "\t ferohely: " + this.Fhely);
    }
  }
}
</script>

<style>

</style>
