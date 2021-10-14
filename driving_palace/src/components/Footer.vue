<template>
  <div class="sotetarny text-center text-white">
    <div class="container p-4">
      <section class="mb-4">
        <a class="btn btn-outline-light btn-floating m-1" href="#!" id="icon" role="button"><i class="fa fa-facebook" aria-hidden="true"></i></a>
        <a class="btn btn-outline-light btn-floating m-1" href="#!" id="icon" role="button"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        <a class="btn btn-outline-light btn-floating m-1" href="#!" id="icon" role="button"><i class="fa fa-google" aria-hidden="true"></i></a>
        <a class="btn btn-outline-light btn-floating m-1" href="#!" id="icon" role="button"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        <a class="btn btn-outline-light btn-floating m-1" href="#!" id="icon" role="button"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
        <a class="btn btn-outline-light btn-floating m-1" href="#!" id="icon" role="button"><i class="fa fa-github" aria-hidden="true"></i></a>
      </section>
      <section class="mb-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earumrepellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnameum harum corrupti dicta, aliquam sequi voluptate quas.</p>
      </section>
      <section class="">
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <ul class="list-unstyled mb-0">
              <li>
                <router-link to="/" class="text-white piros">ÁSZF</router-link>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <ul class="list-unstyled mb-0">
              <li>
                <router-link to="/" class="text-white piros">Adatvédelem</router-link>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <ul class="list-unstyled mb-0">
              <li>
                <router-link to="/" class="text-white piros">GYIK</router-link>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <ul class="list-unstyled mb-0">
              <li>
                <router-link to="/" class="text-white piros">Kapcsolat</router-link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    <div class="text-center p-3 sotetarny">© 2021 <router-link class="piros" to="/">Driving Palace</router-link></div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style>

</style>