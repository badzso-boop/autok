<template>
  <div id="main" class="container-fluid w-100">
    <h2 class="text-center piros">Kapcsolat</h2>
    <h5>Ügyfélszolgálat - <a href="mailto:info@drivingpalace.hu">info@drivingpalace.hu</a></h5>
    <h5>Rendszergazda - <a href="mailto:admin@drivingpalace.hu">admin@drivingpalace.hu</a></h5>
    <br>
    <h4>Írjon nekünk emailt!</h4>
    <form class="w-75 mx-auto text-center pt-2">
      <input type="text" class="w-50 text-center form-control mx-auto" placeholder="Kérem adja meg a nevét!" v-model="nev">
      <input type="email" class="w-50 text-center form-control mx-auto" placeholder="Kérem adja meg az email címét" v-model="email">
      <textarea class="form-control w-50 mx-auto" id="message" cols="30" rows="10" placeholder="Ide írhatja az üzenetet" v-model="szoveg"></textarea>
      <button type="submit" class="btn sotetarny text-white w-100 mb-5" @click="kuldes">Küldés</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      nev: '',
      email: '',
      szoveg: '',
    }
    
  },
  methods: {
    kuldes: function() {
      console.log('Név:' + this.nev + ', E-mail: ' + this.email + ', Szoveg: ' + this.szoveg);


      //elküldöm majd a szerónak
      fetch('adamszervere/kapcsolat')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        //Logolom a választ
        console.log(myJson);
      });
    }
  }
}
</script>

<style>

</style>