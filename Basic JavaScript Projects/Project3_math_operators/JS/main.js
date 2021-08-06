//function for addition
function addition(){
    var sum = 4 + 5; //assign sum of 4 + 5 in var named sum
    document.getElementById('math').innerHTML = "4 + 5 = " + sum; //display sum in HTML element with id 'math'
}

//function for subtraction
function subtraction() {
    var subract = 9-2; //assign value to var named subtract
    document.getElementById('subtract').innerHTML = "9 - 2 = " + subract; //display var in html element with id 'subtract'
}

//function for multiply
function multiply() {
    var mult = 2*2; //assign value to var
    document.getElementById('mult').innerHTML = "2 * 2 = " + mult; //display in element with id 'mult'
}

//function for division
function divide() {
    var div = 8/2; //assign var
    document.getElementById('div').innerHTML = "8 / 2 = " + div; //display in element with id 'div'
}

//function for multiple operations 
function multipleOp() {
    var total = (2**4) + 8 - 2; //assign sum of multiple operations to var
    document.getElementById('multipleOp').innerHTML = total; //display total in element with id 'mutlipleOp'
}

//function for modulus % - remainder after division
function modulus() {
    var mod = 19%4; //remainder
    document.getElementById('mod').innerHTML = "19 % 4 = " + mod; //display total in element with id 'mod'
}

//function for negation operator
function negation() {
    var x = 2; //a positive value
    document.getElementById('neg').innerHTML = -x; // -2  value becomes negative bc of negation operator - assinged to element with id 'neg'
}

//function for increment
function increment() {
    var y = 34;
    y++; //increment y (assigned value of 34) by 1 = 35
    document.getElementById('inc').innerHTML = "increment of 34: " + y; //display result in element with id 'inc'
}

//function for decrement
function decrement() {
    var z = 100;
    z--; //decrement z (value of 100) by 1  = 99
    document.getElementById('dec').innerHTML = 'decrement of 100: ' + z; //display result in element with id 'dec'
}

//function for random number 
function randomNum() { //math.random return number between 0 and 1. multiplied by 100 to return value between 0 and 100.
    document.getElementById('random').innerHTML = Math.random() * 100; //display random number btw 0 and 100 in element with id of 'random'
}

//math object challenge: utilize math object and method - used round method
function roundedNum() {
    var number = 26.80;
    document.getElementById('round').innerHTML = '26.80 rounded is: ' + Math.round(number); //number is rounded to integer by the math round method
    //displayed in element with id 'round'
}
