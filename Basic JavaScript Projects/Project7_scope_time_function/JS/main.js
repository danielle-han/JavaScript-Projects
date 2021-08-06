//global var
var x = 2;

function add() {
    //local var
    var y = 3;
    document.getElementById('add').innerHTML = x+y;
}


//intentional error
function multiply(){
   document.getElementById('mult').innerHTML = x*y;
}

//date method assignment:
function date(){
    if(new Date().getHours() > 18) {
        document.getElementById('date').innerHTML = "Good Evening!";
    } else {
        document.getElementById('date').innerHTML = "Not evening yet.";
    }
}

//if statement assignment
function ifStatement(value) {
    if(value > 10) {
        document.getElementById('if').innerHTML = value + " is greater than 10";
    } else {
        document.getElementById('if').innerHTML = value + " is less than or equal to 10";
    }
}

//else assignment
function elseStatement(){
    var number = document.getElementById('input').value;
    var output;
    if (number < 10) {
        output = number + " is less than 10";
    } else {
        output = number + " is greater than or equal to 10";
    }
    document.getElementById('number').innerHTML = output;
}

//else if assignment: get time
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = 'It is morning time!';
    }
    else if (Time >= 12 == Time < 18) {
        Reply = 'It is afternoon.';
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}