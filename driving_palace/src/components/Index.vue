<template>
  <div>
    <div id = "front">
        <h2 class="text-center piros">Üdvözlünk a Drivingpalace oldalán!</h2>
        <p class="px-5 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
            recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
            minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
            quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
            fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
            consequuntur! Commodi minima excepturi repudiandae velit hic maxime
            doloremque. Quaerat provident commodi consectetur veniam similique ad 
            earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
            fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
            suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
            modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
            totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
            quasi aliquam eligendi, placeat qui corporis!</p>
    </div>
    <hr class=" my-5 w-75 text-center">

    <div id="main">
      <h2 class="text-center piros">Populáris utak</h2>
      <div class="col-xl">
        <div class="card-deck mx-auto my-5">
          <div class="card sotetarny mx-auto mb-3 border border-white" style="max-width: 22rem; min-width: 17rem;" v-for = "ut in mUtak" :key="ut.id">
            <!--<img class="card-img-top mh-25 p-2" v-bind:src="'../kepek/' + ut.picture + '.jpg'" alt="Kép a megadott útról">-->
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

    <h2 class="text-center piros">Populáris helyek</h2>
    <div class="col-xl">
      <div class="card-deck mx-auto my-5">
        <div class="card sotetarny mx-auto mb-3 border border-white" style="max-width: 22rem; min-width: 17rem;" v-for = "hely in mHely" :key="hely.id">
          <!--<img class="card-img-top mh-25 p-2" v-bind:src="'kepek/' + hely.picture + '.jpg'" alt="Kép a megadott útról">-->
          <img class="card-img-top mh-25 p-2" src="../kepek/sample.jpg" alt="Kép a megadott helyről">
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
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      mUtak: [],
      mHely: [],
      szam: [],
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData: function() {
      //utak 3db fetch (prototipus fetch), 
      //minden fetch elemnél pusholni kell a tömbbe
      for(let i = 0; i < 4; i++)
      {
          this.mUtak.push({id: 0,
              userid: 0,
              picture: 'sample',
              title: 'Rátót',
              content: 'Rohadt jó út rátót fele. Ez egy jó út!',
              length: 15,
              megye: 'Veszprém',
              type: 'szerpentín',
              quality: 'kiválló',
              nezetseg: 15,
              date: '2021.04.29 18:30'})
      }

      // TODO: for helyett, 4 utat kérünk le a szerverről

      // A lényegi rész ez a fetch lesz
      /*
      fetch('http://example.com/songs')
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(err => console.error(err));
      */

      //helyszínek 3db fetch (prototipus fetch), 
      //minden fetch elemnél pusholni kell a tömbbe
      for(let i = 0; i < 4; i++)
      {
          console.log('baj hely');
          this.mHely.push({id: 0,
              userid: 0,
              picture: 'sample',
              title: 'Szabadja Halott város',
              content: 'Olyan mintha visszamennénk a 80-s évekbe egyszerűen imádom!',
              megye: 'Veszprém',
              kozelithetoseg: 'könnyen',
              nezetseg: 15,
              hely: 50,
              date: '2021.04.29 18:30'})
      }
      // A lényegi rész ez a fetch lesz
      /*
      fetch('http://example.com/songs')
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(err => console.error(err));
      */
      }
    }
}
</script>

<style>

</style>