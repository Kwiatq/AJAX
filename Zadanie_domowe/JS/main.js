'use strict';
$(function () {
    var btn = $('#button');
    var wyswietl = $('#dane-programisty');

    $('button').click(function (data) {

        $.getJSON(
            "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",

            function (data) {
                wyswietl.empty().append("Imię: <b>" + data.imie + "</b><br>Nazwisko: <b>" + data.nazwisko + "</b><br>Zawód: <b>" + data.zawod + "</b><br>Firma: <b>" + data.firma + "</b>");
            });
    });
});