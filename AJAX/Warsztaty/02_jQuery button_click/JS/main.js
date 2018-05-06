'use strict';

var btn = $('#get');
var output = $('#output');


function pobierzDane(data){
    
    $.getJSON(
 "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
                )}
    
$.ajax (
       {
           url:"http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
           
           dataType:'json',
           success: function(resultJSON){
               console.log(resultJSON);
               
           },
           onerror: function (msg){
           console.log(msg);
           }
       });
        
$('button').click(function(pobierzDane){
     
});
