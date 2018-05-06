'use strict';
//$(function(){
var btn = $('#get');
var output = $('#output');
var data = "";



 $('button').click(function (data){
     
     $.getJSON(
 "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
                
    function (data){
        console.log(data);
        output.innerHTML = data.userID + " " + data.userName + " " + data.userURL;
    });
    
     console.log(data);
     
});
   
    
//});