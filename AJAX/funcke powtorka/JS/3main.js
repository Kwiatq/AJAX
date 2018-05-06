'use strict';

//var 0 = {
//    
//    wlasciwosc1 : [
//        0,1,2,3
//    ],
//    
//    wlasciwosc2 : 'string',
//    
//    metoda1 : function() {
//        console.log('Metoda');
//    }
//}

class Ogloszenie {
    
    constructor (tytul, opis, kategoria, autor, cena) {
        this.tytul = tytul;
        this.opis = opis;
        this.kategoria = kategoria;
        this.autor = autor;
        this.cena = cena;
    }
    
    pobierzOgloszenie() {
        var ogl = "<h1>" + this.tytul + "<br><small>" + this.autor + "</small></h1>";
        ogl += "<h6>" + this.cena + "</h6>";    
        ogl += "<p>" + this.opis + "</p>";
        ogl += "<p><em> Kategoria: " + this.kategoria + "</em></p>";
        ogl += "<hr>";
        
        document.body.insertAdjacentHTML('afterbegin', ogl);
    }
}

// pojawianie sie na dole 'beforeend' pojawianie sie od gory nowych 'afterbegin'

var ogloszenie = new Ogloszenie ( "sprzedam opla", "niemiec plakal, ", "motoryzacja", "helmut", 2500 );

ogloszenie.pobierzOgloszenie();

for (var i=0; i<10; i++) {
ogloszenie = new Ogloszenie ((i+1) + "sprzedam pralke", "programowalna frania na zimna wode z maglem", "AGD", "grazyna", 420 );
ogloszenie.pobierzOgloszenie();
}

