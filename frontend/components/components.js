//Navbar (ha uj sort írsz \-t írj)
Vue.component('fejlec', {
    template: 
    
    '<nav class="navbar navbar-dark navbar-expand-xl sotetarny mb-3">\
    <a class="navbar-brand" href="#">Driving Palace</a>\
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">\
        <span class="navbar-toggler-icon"></span>\
    </button>\
    <div class="collapse navbar-collapse" id="collapsibleNavbar">\
        <ul class="navbar-nav">\
            <li class="nav-item">\
                <a class="nav-link  piros py-1 px-3" href="index.html">Főoldal</a>\
            </li>\
            <li class="nav-item">\
                <a class="nav-link  piros py-1 px-3" href="utak.html">Utak</a>\
            </li>\
            <li class="nav-item">\
                <a class="nav-link piros py-1 px-3" href="helyszinek.html">Helyszínek</a>\
            </li>\
            <li class="nav-item">\
                <a class="nav-link piros py-1 px-3" href="forum.html">Fórum</a>\
            </li>\
            <li class="nav-item">\
                <a class="nav-link piros py-1 px-3" href="csoportok.html">Csoportok</a>\
            </li>\
            <li class="nav-item">\
                <a class="nav-link piros py-1 px-3" href="szabalyzat.html">Szabályzat</a>\
            </li>\
            <li class="nav-item">\
                <a class="nav-link piros py-1 px-3" href="profile.html">Felhasználói Profil</a>\
            </li>\
            <li class="nav-item">\
                <a class="nav-link piros py-1 px-3" href="kapcsolat.html">Kapcsolat</a>\
            </li>\
            <li class="nav-item">\
                <a class="nav-link piros py-1 px-3" href="admin.html">Admin felület</a>\
            </li>\
        </ul>\
        <ul class="navbar-nav navbar-right ml-auto">\
            <li class="nav-item"><a class="nav-link piros py-1 px-1 d-inline" href="signup.html"><i class="fa fa-user-plus" aria-hidden="true"></i></a></li>\
            <li class="nav-item"><a class="nav-link piros py-1 px-1 d-inline" href="signup.html"><i class="fa fa-sign-in" aria-hidden="true"></i></a></li>\
        </ul>\
    </div>\
</nav>'
})

Vue.component('lablec', {
    template: 
    '<div class="sotetarny text-center text-white">\
    <div class="container p-4">\
      <section class="mb-4">\
        <a class="btn btn-outline-light btn-floating m-1" href="#!" id="icon" role="button"><i class="fa fa-facebook" aria-hidden="true"></i></a>\
        <a class="btn btn-outline-light btn-floating m-1" href="#!" id="icon" role="button"><i class="fa fa-twitter" aria-hidden="true"></i></a>\
        <a class="btn btn-outline-light btn-floating m-1" href="#!" id="icon" role="button"><i class="fa fa-google" aria-hidden="true"></i></a>\
        <a class="btn btn-outline-light btn-floating m-1" href="#!" id="icon" role="button"><i class="fa fa-instagram" aria-hidden="true"></i></a>\
        <a class="btn btn-outline-light btn-floating m-1" href="#!" id="icon" role="button"><i class="fa fa-linkedin" aria-hidden="true"></i></a>\
        <a class="btn btn-outline-light btn-floating m-1" href="#!" id="icon" role="button"><i class="fa fa-github" aria-hidden="true"></i></a>\
      </section>\
      <section class="mb-4">\
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earumrepellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnameum harum corrupti dicta, aliquam sequi voluptate quas.</p>\
      </section>\
      <section class="">\
        <div class="row">\
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">\
            <ul class="list-unstyled mb-0">\
              <li>\
                <a href="#!" class="text-white piros">ÁSZF</a>\
              </li>\
            </ul>\
          </div>\
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">\
            <ul class="list-unstyled mb-0">\
              <li>\
                <a href="#!" class="text-white piros">Adatvédelem</a>\
              </li>\
            </ul>\
          </div>\
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">\
            <ul class="list-unstyled mb-0">\
              <li>\
                <a href="#!" class="text-white piros">GYIK</a>\
              </li>\
            </ul>\
          </div>\
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">\
            <ul class="list-unstyled mb-0">\
              <li>\
                <a href="#!" class="text-white piros">Kapcsolat</a>\
              </li>\
            </ul>\
          </div>\
        </div>\
      </section>\
    </div>\
    <div class="text-center p-3 sotetarny"> © 2021 <a class="piros" href="index.html">Driving Palace</a></div>\
  </div>'
})

var fejlec = new Vue({
    el: '#navbar'
})

var lablec = new Vue({
    el: '#footer'
})