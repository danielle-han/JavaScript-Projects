window.alert("Hello World!"); //alert that says hello world

document.write("Hello World!"); //hello world is displayed on the screen

var a = 'this is a string'; //assign variable 'a' a string value
document.write(a); //display variable on screen

var b = 'this is an alert'; //asssign variable 'b' a string value
window.alert(b); //display variable as an alert

document.write('can\'t, don\'t, won\'t'); //practicing the escaping character in a string

document.write('this is ' + 'a string' + ' concatenated'); //practicing concatenating strings

var c = 'hello ' //assign string to var 
var d = ' world'; //assign string to var
document.write(c + d); //display concatenated result

var pet1='joey', pet2='toby', pet3='kiwi', pet4='sully', pet5='tweety', pet6='baby'; //assign multiple variables at once
document.write(pet4); //display one variable

var pet1=pet1.fontcolor('brown'), //assign all variables defined in past step with a color
    pet2=pet2.fontcolor('tan'),
    pet3=pet3.fontcolor('green'),
    pet4=pet4.fontcolor('blue'),
    pet5=pet5.fontcolor('yellow'),
    pet6=pet6.fontcolor('lightblue');

document.write(pet1, pet2, pet3, pet4, pet5, pet6); //display the variables

//expression:
var expression = 4 + 5;