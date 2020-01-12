/* Modul Assignment 2*/

// question 1
var petArray = ["cat", "cow", "dog"];

// question 2
console.log(petArray[1]);

// question 3
petArray.push("sheep");

// question 4
console.log(petArray.length);

// question 5
var catObject = {
    name: "Benny",
    colour: "Brown",
    age: 5
}

// question 6
console.log(catObject.age);

// question 7
var catArray = [
    {
        name: "Benny",
        colour: "Brown",
        age: 5
    
    }

];

// question 8
for(var i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
    console.log(catArray[i].colour);
    console.log(catArray[i].age);
}

// question 9
function logToConsole(theValue) {
    console.log(theValue);
}

// question 10
logToConsole("donkey");