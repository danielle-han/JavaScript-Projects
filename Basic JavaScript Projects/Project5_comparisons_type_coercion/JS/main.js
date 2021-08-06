//display type of 'true' on screen -> boolean
document.write(typeof true);

//function for displaying coercion -> returns 133
function coercion(){
    document.getElementById('coercion').innerHTML = "13" + 3;
}

//function for displaying NaN 
function notANum(){
    document.getElementById('nan').innerHTML = 0/0;
}

//function for displaying isNaN = true
function trueNaN(){
    document.getElementById('true').innerHTML = isNaN("t");
}

//function for displaying isNaN = false
function falseNaN(){
document.getElementById('false').innerHTML = isNaN(4);
}

//function for displaying Infinity
function infinity(){
    document.getElementById("infinity").innerHTML = 2E310;
}

//function for displaying -Infinity
function negInfinity(){
    document.getElementById("neginfinity").innerHTML = -2E310;
}

//function for displaying (Bool) logical operator returning true
function trueBool(){
    document.getElementById("booltrue").innerHTML = 10 > 2; //return true - 10 is greater than 2
}

//function for displaying (Bool) logical operator returning false
function falseBool(){
    document.getElementById("boolfalse").innerHTML = 10 < 2; //return false - 10 is not less than 2
}

//function for displaying true ==
function equal(){
    document.getElementById("equal").innerHTML = 3==3; //return true
}

//function for displaying false ==
function notEqual(){
    document.getElementById("notequal").innerHTML = 3==5; //return false 
}

//function for displaying true ===
function trueStrictEqual(){
    document.getElementById("truestrict").innerHTML = 10 === 10; //same data type and value: true
}

//function for displaying false ===
function falseStrictEqual(){
    document.getElementById("falsestrict").innerHTML = "4" === 2;  //different data type and value: false
}

//function for displaying true AND
function andTrue(){
    document.getElementById("andtrue").innerHTML = 13>2 && 10>4; //returns true
}

//function for displaying false AND
function andFalse(){
    document.getElementById("andfalse").innerHTML = 13<2 && 10>2; //returns false
}

//function for displaying true OR
function orTrue(){
    document.getElementById("ortrue").innerHTML = 13>2 || 10<2; //returns true
}

//function for displaying false OR
function orFalse(){
    document.getElementById("orfalse").innerHTML = 13<2 || 10<2; //returns false
}

//function for displaying true NOT
function notTrue(){
    document.getElementById("nottrue").innerHTML = !(3<2); //returns true
}

//function for displaying false NOT
function notFalse(){
    document.getElementById("notfalse").innerHTML = !(3>2); //returns false
}


//console.log practice
console.log(10*3);
console.log(4>2);

//=== extra practice 
console.log("4" === 4); //different data type but same value: false
console.log(3 === 10); //same data type but different value: false