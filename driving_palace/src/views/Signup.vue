<template>
  <div id="main" class="container-fluid w-100">
  <div class="row w-100" id="loginrow">
    <div class="col-xl-1"></div>
    <div class="col-xl-4" id="signup">
    <h1 class="text-center">Regisztráció</h1>
    <!--username,teljes_nev,email,password, jelszo megin-->
    <form class="form-group">
      <label for="uname" class="control-label mt-3 mb-0">Felhasználónév</label>
      <input type="text" id="uname" class="form-control" v-model="reg.uname">
      <label for="fullname" class="control-label mt-3 mb-0">Teljes név</label>
      <input type="text" id="fullname" class="form-control" v-model="reg.fullname">
      <label for="email" class="control-label mt-3 mb-0">Email</label>
      <input type="text" id="email" class="form-control" v-model="reg.email">
      <label for="password" class="control-label mt-3 mb-0">Jelszó</label>
      <input type="password" id="password" class="form-control" v-model="reg.password">
      <label for="password" class="control-label mt-3 mb-0">Jelszó újra</label>
      <input type="password" id="password" class="form-control" v-model="reg.password">
      <a href="#" v-on:click="sliderel">Belépek!</a>
      <button class="btn btn-dark form-control mt-3" v-on:click="regisztracio">Regisztráció</button>
    </form>
    </div>
    <div class="col-xl-2"></div>
    <div class="col-xl-4" id="login">
    <h1 class="text-center">Belépés</h1>
    <!--email,password-->
    <form class="form-group">
      <label for="email" class="control-label mt-3 mb-0">Email</label>
      <input type="text" id="email" class="form-control" v-model="log.email">
      <label for="password" class="control-label mt-3 mb-0">Jelszó</label>
      <input type="password" id="password" class="form-control" v-model="log.password">
      <a href="#" v-on:click="sliderad">Regisztrálok!</a>
      <button class="btn btn-dark form-control mt-3" v-on:click="belepes">Belépés</button>
    </form>
    </div>
    <div class="col-xl-1"></div>
    <div class="bg-danger h-75 w-50 position-fixed" id="login-cover"></div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      reg: {
        username: '',
        fullname: '',
        email: '',
        password: ''
      },
      log: {
        email: '',
        password: ''
      },
    }
  },
  methods: {
    belepes: function() {
      event.preventDefault();
      console.log("Küldöm már ádó ;)")
      fetch('http://localhost:8000/data/login', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(this.log)
      })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
      });
    },
    regisztracio: function() {
      event.preventDefault();
      console.log("Küldöm már ádó ;)")
      fetch('http://localhost:8000/data/signup', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(this.reg)
      })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
      });
    },
    sliderad: function() {
      const slider = document.getElementById("login-cover");
      slider.classList.add('slide');
    },
    sliderel: function() {
      const slider = document.getElementById("login-cover");
      slider.classList.remove('slide');
    }
  }
}
</script>

<style>

</style>
