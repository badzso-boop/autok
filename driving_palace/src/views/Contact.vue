<template>
  <div id="main">
  <h3>Kapcsolat</h3>
  <h5>Ügyfélszolgálat - <a href="mailto:info@drivingpalace.hu">info@drivingpalace.hu</a></h5>
  <h5>Rendszergazda - <a href="mailto:admin@drivingpalace.hu">admin@drivingpalace.hu</a></h5>
  
  <br>

  <h4>Írjon nekünk emailt!</h4>
  <input type="text" placeholder="Kérem adja meg a nevét!" v-model="nev">
  <input type="text" placeholder="Kérem adja meg az email címét" v-model="email">
  <textarea name="" id="" cols="30" rows="10" placeholder="Ide írhatja az üzenetet" v-model="szoveg"></textarea>
  <button @click="kuldes">Küldés</button>
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