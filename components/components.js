//Navbar (ha uj sort írsz \-t írj)
Vue.component('fejlec', {
    template: '<div>\
    <ul>\
            <li>\
                <a href="index.html">Főoldal</a>\
            </li>\
            <li>\
                <a href="utak.html">Utak</a>\
            </li>\
            <li>\
                <a href="helyszinek.html">Helyszínek</a>\
            </li>\
            <li>\
                <a href="forum.html">Fórum</a>\
            </li>\
            <li>\
                <a href="csoportok.html">Csoportok</a>\
            </li>\
            <li>\
                <a href="szabalyzat.html">Szabályzat</a>\
            </li>\
            <li>\
                <a href="signup.html">Belépés/Regisztráció</a>\
            </li>\
            <li>\
                <a href="profile.html">Felhasználói Profil</a>\
            </li>\
            <li>\
                <a href="kapcsolat.html">Kapcsolat</a>\
            </li>\
            <li>\
                <a href="admin.html">Admin felület</a>\
            </li>\
        </ul>\
    </div>'
})

//Footer (ha uj sort írsz \-t írj)
Vue.component('lablec', {
    template: '<h3>Drivingpalace 2021 TM</h3>'
})

var fejlec = new Vue({
    el: '#navbar'
})

var lablec = new Vue({
    el: '#footer'
})