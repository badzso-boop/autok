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
    template: '<h3>Drivingpalace 2021 TM</h3>'
})

var fejlec = new Vue({
    el: '#navbar'
})

var lablec = new Vue({
    el: '#footer'
})