//function that displays colored text in html element with id: 'color' when called.
function textColor() {
    var text = 'This is blue text'; //assign var text to string
    var coloredText = text.fontcolor('blue'); //change color of string assigned to 'text' to blue.
    document.getElementById('color').innerHTML = coloredText; //display the colored text in HTML element with id 'color'
}

//function that displays concatenated string in html element with id:'concatenate' when called.
function onClick(){
var sentence = "this is a string"; //assign string to var 
sentence += " that has been concatenated"; //concatenate another string to string assigned to var
document.getElementById('concatenate').innerHTML = sentence; //display concatenated string in HTML element with id 'concatenate'
}

//function challenge: 
function addition(x,y) {
    return x + y;
}

var sum = addition(4,6);
document.write(sum);