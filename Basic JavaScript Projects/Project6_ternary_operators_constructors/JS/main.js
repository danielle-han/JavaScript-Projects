//ternary operation. Check height inputed value to see if you are tall enough to ride
function Ride_Function() {
    var Height, Can_ride; //declare vars
    Height = document.getElementById('Height').value; //assign input value to Height var
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //assign string to Can_ride var based on input using conditional/ternary operator
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //display result
}

//ternary operation - check if user is old enough to vote based on inputted age
function checkAge(){
    var age, canVote; //declare vars
    age = document.getElementById('age').value; //assign inputted age value to age var
    canVote = (age < 18) ? "You are not old enough to vote" : "You can vote!";//assing string value based on condition
    document.getElementById('vote').innerHTML = canVote; //display result
}

//follow-along (learning this and new keywords) 
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " +
        Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

//New Keyword Practice  - use keyword new and this
function Parrot(Species, Color, HasCrest, Age) { //assign properties
    this.Parrot_Species = Species;
    this.Parrot_Color = Color;
    this.Parrot_HasCrest = HasCrest;
    this.Parrot_Age = Age;
}
var Tweety = new Parrot("Parrotlet","yellow", false, 10);//new object instance
var Sully = new Parrot("Cockatoo", "white", true, 20);//new object instance
var Kiwi = new Parrot("Eclectus", "green", false, 15);//new object instance
function parrotFunction(){
    document.getElementById('New_and_This').innerHTML = "Sully is a " + Sully.Parrot_Color + " " + Sully.Parrot_Species + ". He is " + Sully.Parrot_Age + " years old."
} //display on HTML

//Object constructor function assignment:
function Student(firstName, lastName, age, gpa) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gpa = gpa;
}

//nested function
function parent(){
    document.getElementById('Nested_Function').innerHTML = child();
    function child() { //nested
        var x = 3;
        var y = 5;
        var sum;
        function total() { //nested
           sum = x + y;
        }
        total();
        return sum;
    }
}