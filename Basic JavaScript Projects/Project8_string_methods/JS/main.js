//concat() method used
function joinStrings(){
    var string1 = 'This is ';
    var string2 = 'a concatenated ';
    var string3 = 'string';

    var joinedString = string1.concat(string2, string3);

    document.getElementById('string').innerHTML = joinedString;
}

//slice() method used
function sliceString(){
    var string = "This is a string";
    var slicedString = string.slice(10,16);
    
    document.getElementById('slice').innerHTML = slicedString;
}

//toUpperCase -> turns all chars to uppercase.
function toUpper(){
    var string = 'hello';
    var upperString = string.toUpperCase();

    document.getElementById('upper').innerHTML = upperString;
}

//search() - searches for specified value in string. returns position. if none found -1 is returned.
function searchWord(){
    var string = 'this is a string';

    document.getElementById('search').innerHTML = string.search('string');
}

//toString() - turn number to string
function numToString(){
    var num = 15;

    document.getElementById('num').innerHTML = num.toString();
}

//toPrecision() - to specified length
function precision(){
    var x = 2334.57;

    document.getElementById('precision').innerHTML = x.toPrecision(2);
}

//toFixed() - number converted to string and rounded to specified number of decimals
function fixed(){
    var x = 234.23423;

    document.getElementById('fixed').innerHTML = x.toFixed(2);
}

//valueOf() - return primitive value
function value(){
    var x = 64;

    document.getElementById('value').innerHTML = x.valueOf();
}
