<template>
  <div id="main" class="container-fluid w-100">
  <h2 class="text-center piros">Helyszínek feltöltése</h2>
  <form class="w-75 mx-auto text-center pt-2">
    <input type="text" placeholder="Név" v-model="title" class="w-50 text-center form-control mx-auto">
    <br>

    <textarea class="form-control" name="leiras" id="leiras" cols="30" rows="10" placeholder="Leírás" v-model="content"></textarea>
    <br>

    <select name="megyek" class="form-group d-block w-100 form-control" id="megye" v-model="megye">
    <option value="" disabled selected hidden>Megye</option>
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

    <select name="tipus" class="form-group d-block w-100 form-control" id="tipus" v-model="type">
    <option value="" disabled selected hidden>Megközelíthetőség</option>
    <option value="Könnyű">Könnyen</option>
    <option value="Közepes">Nehézkes</option>
    <option value="Nehéz">Nehéz</option>
    </select>

    <div class="row pb-2">
    <div class="col-xl-3 my-auto">
      <label for="hossz">Férőhely</label>
    </div>
    <div class="col my-auto input-group">
      <input type="number" class="form-control d-block" id="hossz" v-model="Fhely">
      <div class="input-group-append">
      <span class="input-group-text">fő</span>
      </div>
    </div>
    </div>

    <input type="file" class="mt-2 mb-4" @change="kepFeltolt">

    <button class="btn sotetarny text-white w-100 mb-5" v-on:click="feltoltes">Feltöltés</button>
  </form>

  <h2 v-if="proba != null">Hali</h2>
  </div>
</template>

<script>
export default {
  name: 'PlaceUpload',
  data() {
    return {
      title: '',
      content: '',
      megye: '',
      type: '',
      Fhely: 0,
      picture: null,
      proba: null
    }
  },
  methods: {
    feltoltes: function(event) {
      event.preventDefault();
      console.log('Cím: ' + this.title + '\nContent: ' + this.content + '\nMegye: ' + this.megye + '\nMegközelíthetőség: ' + this.type + '\nFérőhely: ' + this.Fhely);
      //send to the firebase server -> csak proba
      fetch('https://drivingpalace-default-rtdb.europe-west1.firebasedatabase.app/helyek.json', {
        method: 'POST',
        body: JSON.stringify({
          title: this.title,
          content: this.content,
          megye: this.megye,
          type: this.type,
          Fhely: this.Fhely,
          picture: 'not ready yet',
        })
      })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
      });

      this.title = null;
      this.content = null;
      this.megye = '';
      this.type = '';
      this.Fhely = 0;
    },
    kepFeltolt: function(event) {
      this.picture = event.target.files[0];
      console.log(this.picture);
    }
  }
}
</script>

<style>

</style>