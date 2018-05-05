'use strict';
var btn = document.getElementById('wyslij');
var output = document.getElementById('output');

btn.addEventListener('click', function(e){ //blokowanie wyslania formularza działa tylko na evencie....w nawiasie funkcji oznaczone jako 'e'- tak samo można używać w nawiasie 'event', tylko wtedy wyrazenie przed preventDefault ma miec postac 'event', co w nawiasie formuly do tego sie odwolujemy przy zatrzymaniu
    
    e.preventDefault(); //blokowanie wysłania formularza i przeładowania strony, dzięki czemu consola wyswietli zmienna 'btn'
    
    // var el = document.getElementByID('imie')[0]; 
    
    //console.log(btn);
    var imie = document.getElementById('imie').value;
    var nazwisko = document.getElementById('nazwisko').value;
    //szybkie kopiowanie w bracketsie ctrl + D
    console.log(imie, nazwisko);
    
    output.innerHTML = '<p class="nowa" style="font-size: 2rem;">Imie: '+ imie + '</p>' + '<p>Nazwisko: ' + nazwisko + '</p>';
    
});



