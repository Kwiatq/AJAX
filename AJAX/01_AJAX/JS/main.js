'use strict';

function showData(arrData) {
    
    var html = "";
    arrData.forEach(function(elem, index) {
        html += "<p> Tytuł: <strong>" + elem.title +"</strong></p>"
    } );
    document.body.innerHTML = html;
}

function ajax(method, url) {
  
    
    // tworze obiekt XMLHtttpRequest
    var httpReq = new XMLHttpRequest();
    console.log(httpReq);
    // otwieram połączenie z serwerem
    httpReq.open(method, url);
    
    // zdarzenie zmiany statusu polaczenia
    httpReq.addEventListener('readystatechange', function(){
        
        // jesli readyState == 4 dane zwrocone i gotowe do uzycia
        if ( httpReq.readyState == 4) {
            
            //sprawdzam kod statusu odpowiedzi interesuje nas 200
            if (httpReq.status == 200) {
                var data = httpReq.responseText;
                var jsonData = JSON.parse( data );
                
                showData(jsonData);
            }
        }
    });
    httpReq.send();
}
    ajax("GET", "https://jsonplaceholder.typicode.com/posts/");    
