'use strict';

$(function{

// pierwsza wersja
//
//var doc = document.documentElement;
//
//var docHeight = doc.offsetHeight;
//
//var top_ = doc.scrollTop;
//
//var windowHeight = window.innerHeight;
//
//var topOffset = top_ + windowHeight;
//
//if ( topOffset == docHeight ) {
//    
//    console.log( "jestes na koncu strony" );
//}

  // po zaznaczeniu linijki z ctrl mozna pisac to samo w kilku linijkach
  
  //przesuwanie linijki tekstu bez wycinania ctrl + shift + strzalka gora albo dol
  
var doc = document.documentElement;

var docHeight = doc.offsetHeight;

var top_ = doc.scrollTop;

var windowHeight = window.innerHeight;
//obliczenie biezacego polozenia okna przegladarki
var topOffset = top_ + windowHeight;
//jezeli biezace polozenie okna przegladarki == wysokosc calego dokumentu, wykonuj zapytanie ajax i dodaj na koncu listy nowe dane
if ( topOffset == docHeight ) {
    var newElement = '';
    //zapytanie ajax
    $.getJSON ('https//jsonplaceholder.typicode.com/users',function(data){
        data.forEach(function(elem, ind){
            newListElement +='<div class="my_item">';
                newListElement +='<div class="my_id">' + elem.id + '</div>';
                newListElement +='<div class="my_name">' + elem.name + '</div>';
                newListElement +='<div class="my_url">' + elem.website + '/div>';
                newListElement +='<hr>';
            newListElement +='</div>';
           });
    document.getElementById('my_list').insertAdjacentHTML('beforeend', newListElement);   
        
        console.log(data);
       
    });  
}
});