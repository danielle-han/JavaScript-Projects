//function for the parrot dictionary and for displaying in HTML
function parrotDict() {
    //defining dictionary with KVPs
    var Parrot = {
        Species: "Umbrella Cockatoo",
        Color: 'White',
        Age: 20,
        Weight: '1.1lb',
        HasCrest: true
    }

    delete Parrot.Species; //deletes value with key 'Species'


    //display the value with key 'Species' from Parrot in HTML element with id 'dictionary'
    document.getElementById('dictionary').innerHTML = Parrot.Species;  //displays 'undefined' bc the value was deleted
}