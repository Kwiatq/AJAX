'use strict';

var output = document.getElementById('output');

var input = document.getElementsByTagName('input')[0];

var btn = document.querySelector('#btn');

btn.addEventListener('click', function(e){
    e.preventDefault();
    
    var color = input.value;
    
    output.style.backgroundColor = color;
});

