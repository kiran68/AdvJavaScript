                 //Callback
//A javaScript callback is a function which is to be executed after another function has finished execution
// Afunction that is called when of blocking completed.
//callback function allows other code to run in the meantime.
// Callback is called when a task gets completed and is the asynchronous equivalant of a function

// A more formal defination would be - ant function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function 


const button = document.getElementById("button");
function callback(){
    console.log("Hello Word");
}

button.addEventListener('click','callback');

//One More Example !(Asynchronous Callback Function)
// We can make this an asynchronous callback by adding it to an event, like a button click

const buttonOne = document.getElementById('fetchusers');
button.addEventListener('click',fetchUsers);



function myFirst(){
myDisplayer("Hello");
}
function mySecond(){
    myDisplayer("GoodBye");
}
myFirst();
mySecond();



function myFirst(){
    myDisplayer("Hello");
}
function mySecond(){
    myDisplayer("Goodnye");
}
mySecond();
myFirst();

//javaScript Callbacks
// A callback is a function passed as an argument to another function 

// Note: when you pass function as an argumrnt remember not to use paranthesis

//Right: myCalculator(5,5,myDisplayer);
//Wrong: myCalculatoe(5,5,myDisplayer());

//When to use a Csllback ?
// Where callbacks really shine are in asynchronous functions,where one function has to wait for another function(like waiting for a file to load)

function myDisplayer(some){
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1,num2,myCallback){
    let sum = num1 + num2;
    myCallback(sum);
}
myCalculator(5,5,myDisplayer);
