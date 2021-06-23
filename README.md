# autok
-----------
## 04.29 Projekt kezdese
    - mappak letrehozva
    - frontend:
        - komponensek: 
            - fejléc
            - lábléc
        - main.html => főoldal
            - Lorem ipsum -> ott lesz a leírás
            - első 3 út lekérése (csak szimulálva)
            - első 3 helyszín lekérése (csak szimulálva)
        - utak.html => utak
            - az összes út lekérése
            - oldalakra bontva -> béta
## 06.23 Alakulgat
    - Frontend:
        - oldalak:
            - helyszínek.html
                - az oldal itt listázza ki a helyszíneket
                - részletes keresés
                - helyszínek feltöltése
                    - cím
                    - leírás
                    - megye
                    - megközelíthetőség
                    - férőhely
                    - kép
            - utak.html
                - az oldal itt listázza ki az utakat
                - részletes keresés
                - utak feltöltése
                    - cím
                    - leírás
                    - megye
                    - típus
                    - minőség
                    - hossz
                    - kép
            - forum.html
                - kategóriák
                    - "lekéri" a szerverről a kategóriákat => kilistázza őket
                - topikok
                    - "lekéri" a topikokat az adott kategóriához => kilistázza őket
                - kommentek
                    - "lekéri a kommenteket" => majd kilistázza őket
                    - profilképpel ellátva
                - moderálás
                    - moderálás menüpont
                    - egyenlőre csak az adminok tudnak kategóriát hozzáadni
            - profile.html
                - több menüpont ahol a profilban lehet navigálni
                    - adatok                     (működik)
                    - a felhasználó útjai        (működik)
                    - a felhasználó helyszínei   (működik)
                    - a felhasználó rendezvényei (még nem müxik)
                    - a felhasználó galériája    (még nem müxik)
        - Javascript
            - forum.js
                - felhasználói adatok -> mindig csak azokat az adatokat kéri el a szervertől amik szükségesek az adott oldalhoz
                - oldallal kapcsolatos Objectek (csak a demoban van megírva előre) -> szervertől kéri el a megfelelő időpontban
                - oldal működéséhez való változók:
                    - Bkategoria -> kategóroa toggler
                    - Btopikok -> topik toggler
                    - Bkommentek -> komment toggler
                    - fak -> az oldal tetején egy fa ábrázolja hol jár épp a felhasználó
                    - moderalas -> moderalas toggler
                    - Szmoderalas -> moderalas gomb szövege
                    - katAdd -> kategória hozzáadása
                    - katSzoveg ->katAdd gomb szövege
                    - ujKat -> ide menti a katAdd inputját
                - functionok
                    - felhasznaloInfo lekeres
                        - elkérem a szervertől a felhasznalo infoit
                    - katValasztas
                        - lekéri a szerverről a topikokat
                        - megjeleníti a kategóriákat
                        - pushol a fak-ba
                    - komValasztas
                        - lekéri az adatokat a kommentekrol
                        - megjeleníti a kommenteket
                        - pushol a fak-ba
                    - oldalModeralas
                        - moderalas ki be kapcsolása
                    - katHozzaadas
                        - kategoria hozzaadasa
            - helyfeltolt.js
                - feltölti a hely adatait a szerverre
            - helyszinek.js
                - lekéri a helyeket a szerverről
                - előre léptetés 
                - hátra léptetés
                - keresés -> elküldi a szervernek a szűrés eredményeit
            - main.js
                - lekéri a 3 legutolsó utat a szerverről
                - lekéri a 3 legutolsó helyszínt a szerverről
            - profile.js
                - valtozok:
                    - felhasznaloi adatok
                    - oldallal kapcsolatos adatok
                    - oldal togglerek
                - functionok
                    - szerkMent
                        - a felhasználói adatokat tudja szerkeszteni
            - utfeltolt.js
                - feltölti az ut adatait a szerverre
            - utak.js
                - lekéri az utakat a szerverről
                - előre léptetés 
                - hátra léptetés
                - keresés -> elküldi a szervernek a szűrés eredményeit