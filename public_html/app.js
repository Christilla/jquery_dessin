/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

console.log('jquery test');

$(document).ready();
for (var i = 0; i < 4794; i++) {
 $('#maindiv').append('<div></div>');
 $('div').addClass('box');}

var color = "white";
$('.box').on("click", function () {$(this).addClass(color);});

$('.box').on('dblclick', function () {$(this).removeClass(color);});

$('#reset').on('click', function () {$('.box').removeClass('red green blue yellow white');});

$('#red').on("click", function () {color='red';});

$('#green').on("click", function () {color='green';});
$('#blue').on("click", function () {color='blue';});
$('#yellow').on("click", function () {color='yellow';});
$('#white').on("click", function () {color='white';});
$('#brown').on("click", function () {color='brown';});
$('#pink').on("click", function () {color='pink';});