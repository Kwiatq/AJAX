'use strict';
$(function(){
var btn = $('#get');
var output = $('#output');

 $('button').click(function (data){
     
     $.getJSON(
 "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
                
    function (data){
        console.log(data);
        output.empty().append("User ID: " + data.userId + "<br>User Name: "+ data.userName + "<br>User URL: "+ data.userURL);
        //output.empty().append(data.userId + " " + data.userName + " " + //data.userURL);
        });
     });
});