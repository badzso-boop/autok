<template>
  <nav class="navbar navbar-dark navbar-expand-xl sotetarny mb-3">
    <router-link class="navbar-brand" to="/">Driving Palace</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link  piros py-1 px-3" to="/">Főoldal</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link  piros py-1 px-3" to="/utak">Utak</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link piros py-1 px-3" to="/helyszinek">Helyszínek</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link piros py-1 px-3" to="/forum">Fórum</router-link>
        </li><!--
        <li class="nav-item">
            <a class="nav-link piros py-1 px-3" href="csoportok.html" v-if="felhasznalo != null">Csoportok</a>
        </li>-->
        <li class="nav-item">
          <router-link class="nav-link piros py-1 px-3" to="/szabalyzat">Szabályzat</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link piros py-1 px-3" to="/profile" v-if="felhasznalo != null">Felhasználói Profil</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link piros py-1 px-3" to="/kapcsolat">Kapcsolat</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link piros py-1 px-3" to="/admin" v-if="tipus == `admin`">Admin felület</router-link>
        </li>
      </ul>
      <ul class="navbar-nav navbar-right ml-auto">
        <li class="nav-item ml-2"><router-link class="nav-link piros py-1 px-1 d-inline" to="/signup" v-if="felhasznalo == null"><i class="fa fa-user-plus" aria-hidden="true"></i></router-link></li>
        <li class="nav-item ml-2"><router-link class="nav-link piros py-1 px-1 d-inline" to="/signup" v-if="felhasznalo != null"><i class="fa fa-sign-in" aria-hidden="true"></i></router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      felhasznalo: 'szmajli01',
      tipus: null, //admin, null->sima
    }
  },
}
</script>

<style>

</style>