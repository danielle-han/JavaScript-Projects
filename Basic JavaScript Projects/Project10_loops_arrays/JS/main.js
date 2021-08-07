//While loop assignmet
function Call_Loop(){
    var num = ""; 
    var x = 1;
    while (x<11) {
        num += '<br>' + x;
        x++;
    }
    document.getElementById('Loop').innerHTML = num;
}

//length property used: returns # of characters in a given string
function checkLength(){
    var word = "string";
    document.getElementById('length').innerHTML = word.length;
}

//For loop assignment
var Instruments = ['guitar','drum','piano','bass','violin','flute'];
var Content = '';
var y;
function for_Loop(){
    for( y=0; y<Instruments.length; y++) {
        Content += Instruments[y] + "<br>";
    }
    document.getElementById('List_of_Instruments').innerHTML = Content;
}

//array assignment
function arrayFunction(){
    var parrot = [];
    parrot[0] = 'Cockatoo';
    parrot[1] = 'Eclectus';
    parrot[2] = 'Parrotlet';
    parrot[3] = 'Cockatiel';

    document.getElementById('array').innerHTML = parrot[2];
}

//constant assignment
const dog = {breed:'bichon frise', color:'white',age:5};
dog.color = 'brown';
dog.name = 'joey';
function constantFunction(){
    document.getElementById('constant').innerHTML = "My dog\'s name is " + dog.name + ". He is " + dog.color + ".";
}

//let keyword
let x = 3;
console.log(x);

//return statement -> stops execution of function and returns a value from that function
function returnStatement() {
    let y = 2;  //let keyword
    return document.getElementById('return').innerHTML = y + x;
}

//object assignment using let, return, and 'this' keyword
let Student = {
    firstName:'John',
    lastName:'Doe',
    major:'Computer Science',
    gpa:3.5,
    description: function(){
        return this.firstName + ' ' + this.lastName + ' is a ' + this.major + ' major with a GPA of ' + this.gpa + ".";
    }
};
document.getElementById('student').innerHTML = Student.description();


//break statement
let text = '';
for (let i=0; i<8;i++) {
    if(i === 4) {break;} //exit loop at 4
    text += i + '<br>';
}
document.getElementById('break').innerHTML = text;

//continue statement
let text2 = '';
for (let i=0; i<8;i++) {
    if(i === 4) {continue;} //skip 4
    text2 += i + '<br>';
}
document.getElementById('continue').innerHTML = text2;

